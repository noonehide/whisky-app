'use strict';

import { JsonProperty } from '@hubcarl/json-typescript-mapper';

export default class Article {
  @JsonProperty('id')
  public id?: string;
  @JsonProperty('username')
  public username?: string;
  @JsonProperty('password')
  public password?: string;

  // constructor must be init everyone JsonProperty
  constructor() {
    this.id = '';
    this.username = '';
    this.password = '';
  }
}