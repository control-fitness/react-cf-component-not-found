import React from 'react';
import Cdn from 'react-cf-helper-cdn';
import I18n from 'react-cf-helper-i18n';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Image,
  Button,
} from 'semantic-ui-react';
import { StatusCode, LogoContainer, Message } from './style';

const NotFound = function Base() {
  return (
    <Container
      fluid
      textAlign="center"
    >
      <Grid
        padded
        centered
      >
        <Grid.Row>
          <Grid.Column>
            <LogoContainer>
              <Image
                centered
                src={Cdn.image('logo-text-296-40.svg')}
              />
            </LogoContainer>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid
        padded
        centered
      >
        <Grid.Row>
          <Grid.Column>
            <StatusCode>
              404
            </StatusCode>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid
        padded
        centered
      >
        <Grid.Row>
          <Grid.Column
            textAlign="center"
          >
            <Message>
              {I18n.t('notFound.message')}
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid
        padded
        centered
      >
        <Grid.Row>
          <Grid.Column
            textAlign="center"
          >
            <Link to="/">
              <Button color="blue">
                {I18n.t('form.buttons.goToStart')}
              </Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default NotFound;
