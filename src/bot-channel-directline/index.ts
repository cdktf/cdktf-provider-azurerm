// https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotChannelDirectlineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline#bot_name BotChannelDirectline#bot_name}
  */
  readonly botName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline#id BotChannelDirectline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline#location BotChannelDirectline#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline#resource_group_name BotChannelDirectline#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * site block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline#site BotChannelDirectline#site}
  */
  readonly site: BotChannelDirectlineSite[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline#timeouts BotChannelDirectline#timeouts}
  */
  readonly timeouts?: BotChannelDirectlineTimeouts;
}
export interface BotChannelDirectlineSite {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline#enabled BotChannelDirectline#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline#enhanced_authentication_enabled BotChannelDirectline#enhanced_authentication_enabled}
  */
  readonly enhancedAuthenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline#name BotChannelDirectline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline#trusted_origins BotChannelDirectline#trusted_origins}
  */
  readonly trustedOrigins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline#v1_allowed BotChannelDirectline#v1_allowed}
  */
  readonly v1Allowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline#v3_allowed BotChannelDirectline#v3_allowed}
  */
  readonly v3Allowed?: boolean | cdktf.IResolvable;
}

export function botChannelDirectlineSiteToTerraform(struct?: BotChannelDirectlineSite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    enhanced_authentication_enabled: cdktf.booleanToTerraform(struct!.enhancedAuthenticationEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    trusted_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustedOrigins),
    v1_allowed: cdktf.booleanToTerraform(struct!.v1Allowed),
    v3_allowed: cdktf.booleanToTerraform(struct!.v3Allowed),
  }
}

export class BotChannelDirectlineSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BotChannelDirectlineSite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._enhancedAuthenticationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedAuthenticationEnabled = this._enhancedAuthenticationEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._trustedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedOrigins = this._trustedOrigins;
    }
    if (this._v1Allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1Allowed = this._v1Allowed;
    }
    if (this._v3Allowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3Allowed = this._v3Allowed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotChannelDirectlineSite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._enhancedAuthenticationEnabled = undefined;
      this._name = undefined;
      this._trustedOrigins = undefined;
      this._v1Allowed = undefined;
      this._v3Allowed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._enhancedAuthenticationEnabled = value.enhancedAuthenticationEnabled;
      this._name = value.name;
      this._trustedOrigins = value.trustedOrigins;
      this._v1Allowed = value.v1Allowed;
      this._v3Allowed = value.v3Allowed;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enhanced_authentication_enabled - computed: false, optional: true, required: false
  private _enhancedAuthenticationEnabled?: boolean | cdktf.IResolvable; 
  public get enhancedAuthenticationEnabled() {
    return this.getBooleanAttribute('enhanced_authentication_enabled');
  }
  public set enhancedAuthenticationEnabled(value: boolean | cdktf.IResolvable) {
    this._enhancedAuthenticationEnabled = value;
  }
  public resetEnhancedAuthenticationEnabled() {
    this._enhancedAuthenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedAuthenticationEnabledInput() {
    return this._enhancedAuthenticationEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // key2 - computed: true, optional: false, required: false
  public get key2() {
    return this.getStringAttribute('key2');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // trusted_origins - computed: false, optional: true, required: false
  private _trustedOrigins?: string[]; 
  public get trustedOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('trusted_origins'));
  }
  public set trustedOrigins(value: string[]) {
    this._trustedOrigins = value;
  }
  public resetTrustedOrigins() {
    this._trustedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedOriginsInput() {
    return this._trustedOrigins;
  }

  // v1_allowed - computed: false, optional: true, required: false
  private _v1Allowed?: boolean | cdktf.IResolvable; 
  public get v1Allowed() {
    return this.getBooleanAttribute('v1_allowed');
  }
  public set v1Allowed(value: boolean | cdktf.IResolvable) {
    this._v1Allowed = value;
  }
  public resetV1Allowed() {
    this._v1Allowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1AllowedInput() {
    return this._v1Allowed;
  }

  // v3_allowed - computed: false, optional: true, required: false
  private _v3Allowed?: boolean | cdktf.IResolvable; 
  public get v3Allowed() {
    return this.getBooleanAttribute('v3_allowed');
  }
  public set v3Allowed(value: boolean | cdktf.IResolvable) {
    this._v3Allowed = value;
  }
  public resetV3Allowed() {
    this._v3Allowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AllowedInput() {
    return this._v3Allowed;
  }
}

export class BotChannelDirectlineSiteList extends cdktf.ComplexList {
  public internalValue? : BotChannelDirectlineSite[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BotChannelDirectlineSiteOutputReference {
    return new BotChannelDirectlineSiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BotChannelDirectlineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline#create BotChannelDirectline#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline#delete BotChannelDirectline#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline#read BotChannelDirectline#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline#update BotChannelDirectline#update}
  */
  readonly update?: string;
}

export function botChannelDirectlineTimeoutsToTerraform(struct?: BotChannelDirectlineTimeoutsOutputReference | BotChannelDirectlineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class BotChannelDirectlineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BotChannelDirectlineTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotChannelDirectlineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline azurerm_bot_channel_directline}
*/
export class BotChannelDirectline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_bot_channel_directline";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/bot_channel_directline azurerm_bot_channel_directline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotChannelDirectlineConfig
  */
  public constructor(scope: Construct, id: string, config: BotChannelDirectlineConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bot_channel_directline',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.39.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._botName = config.botName;
    this._id = config.id;
    this._location = config.location;
    this._resourceGroupName = config.resourceGroupName;
    this._site.internalValue = config.site;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bot_name - computed: false, optional: false, required: true
  private _botName?: string; 
  public get botName() {
    return this.getStringAttribute('bot_name');
  }
  public set botName(value: string) {
    this._botName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botNameInput() {
    return this._botName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // site - computed: false, optional: false, required: true
  private _site = new BotChannelDirectlineSiteList(this, "site", true);
  public get site() {
    return this._site;
  }
  public putSite(value: BotChannelDirectlineSite[] | cdktf.IResolvable) {
    this._site.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BotChannelDirectlineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BotChannelDirectlineTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bot_name: cdktf.stringToTerraform(this._botName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      site: cdktf.listMapper(botChannelDirectlineSiteToTerraform, true)(this._site.internalValue),
      timeouts: botChannelDirectlineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
