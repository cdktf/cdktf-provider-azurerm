// https://www.terraform.io/docs/providers/azurerm/r/managed_application_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ManagedApplicationDefinitionConfig extends TerraformMetaArguments {
  readonly createUiDefinition?: string;
  readonly description?: string;
  readonly displayName: string;
  readonly location: string;
  readonly lockLevel: string;
  readonly mainTemplate?: string;
  readonly name: string;
  readonly packageEnabled?: boolean;
  readonly packageFileUri?: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** authorization block */
  readonly authorization?: ManagedApplicationDefinitionAuthorization[];
  /** timeouts block */
  readonly timeouts?: ManagedApplicationDefinitionTimeouts;
}
export interface ManagedApplicationDefinitionAuthorization {
  readonly roleDefinitionId: string;
  readonly servicePrincipalId: string;
}
export interface ManagedApplicationDefinitionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ManagedApplicationDefinition extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ManagedApplicationDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_managed_application_definition',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._createUiDefinition = config.createUiDefinition;
    this._description = config.description;
    this._displayName = config.displayName;
    this._location = config.location;
    this._lockLevel = config.lockLevel;
    this._mainTemplate = config.mainTemplate;
    this._name = config.name;
    this._packageEnabled = config.packageEnabled;
    this._packageFileUri = config.packageFileUri;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._authorization = config.authorization;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_ui_definition - computed: false, optional: true, required: false
  private _createUiDefinition?: string;
  public get createUiDefinition() {
    return this.getStringAttribute('create_ui_definition');
  }
  public set createUiDefinition(value: string ) {
    this._createUiDefinition = value;
  }
  public resetCreateUiDefinition() {
    this._createUiDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createUiDefinitionInput() {
    return this._createUiDefinition
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // lock_level - computed: false, optional: false, required: true
  private _lockLevel: string;
  public get lockLevel() {
    return this.getStringAttribute('lock_level');
  }
  public set lockLevel(value: string) {
    this._lockLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lockLevelInput() {
    return this._lockLevel
  }

  // main_template - computed: false, optional: true, required: false
  private _mainTemplate?: string;
  public get mainTemplate() {
    return this.getStringAttribute('main_template');
  }
  public set mainTemplate(value: string ) {
    this._mainTemplate = value;
  }
  public resetMainTemplate() {
    this._mainTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainTemplateInput() {
    return this._mainTemplate
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // package_enabled - computed: false, optional: true, required: false
  private _packageEnabled?: boolean;
  public get packageEnabled() {
    return this.getBooleanAttribute('package_enabled');
  }
  public set packageEnabled(value: boolean ) {
    this._packageEnabled = value;
  }
  public resetPackageEnabled() {
    this._packageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageEnabledInput() {
    return this._packageEnabled
  }

  // package_file_uri - computed: false, optional: true, required: false
  private _packageFileUri?: string;
  public get packageFileUri() {
    return this.getStringAttribute('package_file_uri');
  }
  public set packageFileUri(value: string ) {
    this._packageFileUri = value;
  }
  public resetPackageFileUri() {
    this._packageFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageFileUriInput() {
    return this._packageFileUri
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization?: ManagedApplicationDefinitionAuthorization[];
  public get authorization() {
    return this.interpolationForAttribute('authorization') as any;
  }
  public set authorization(value: ManagedApplicationDefinitionAuthorization[] ) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ManagedApplicationDefinitionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ManagedApplicationDefinitionTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_ui_definition: this._createUiDefinition,
      description: this._description,
      display_name: this._displayName,
      location: this._location,
      lock_level: this._lockLevel,
      main_template: this._mainTemplate,
      name: this._name,
      package_enabled: this._packageEnabled,
      package_file_uri: this._packageFileUri,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      authorization: this._authorization,
      timeouts: this._timeouts,
    };
  }
}
