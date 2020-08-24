// https://www.terraform.io/docs/providers/azurerm/r/api_management_user.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementUserConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly confirmation?: string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly note?: string;
  readonly password?: string;
  readonly resourceGroupName: string;
  readonly state?: string;
  readonly userId: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementUserTimeouts;
}
export interface ApiManagementUserTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagementUser extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementUserConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_user',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._confirmation = config.confirmation;
    this._email = config.email;
    this._firstName = config.firstName;
    this._lastName = config.lastName;
    this._note = config.note;
    this._password = config.password;
    this._resourceGroupName = config.resourceGroupName;
    this._state = config.state;
    this._userId = config.userId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_name - computed: false, optional: false, required: true
  private _apiManagementName: string;
  public get apiManagementName() {
    return this._apiManagementName;
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }

  // confirmation - computed: false, optional: true, required: false
  private _confirmation?: string;
  public get confirmation() {
    return this._confirmation;
  }
  public set confirmation(value: string | undefined) {
    this._confirmation = value;
  }

  // email - computed: false, optional: false, required: true
  private _email: string;
  public get email() {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  // first_name - computed: false, optional: false, required: true
  private _firstName: string;
  public get firstName() {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_name - computed: false, optional: false, required: true
  private _lastName: string;
  public get lastName() {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }

  // note - computed: false, optional: true, required: false
  private _note?: string;
  public get note() {
    return this._note;
  }
  public set note(value: string | undefined) {
    this._note = value;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string;
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state ?? this.getStringAttribute('state');
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId: string;
  public get userId() {
    return this._userId;
  }
  public set userId(value: string) {
    this._userId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementUserTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApiManagementUserTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: this._apiManagementName,
      confirmation: this._confirmation,
      email: this._email,
      first_name: this._firstName,
      last_name: this._lastName,
      note: this._note,
      password: this._password,
      resource_group_name: this._resourceGroupName,
      state: this._state,
      user_id: this._userId,
      timeouts: this._timeouts,
    };
  }
}
