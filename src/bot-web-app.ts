// https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotWebAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html#developer_app_insights_api_key BotWebApp#developer_app_insights_api_key}
  */
  readonly developerAppInsightsApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html#developer_app_insights_application_id BotWebApp#developer_app_insights_application_id}
  */
  readonly developerAppInsightsApplicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html#developer_app_insights_key BotWebApp#developer_app_insights_key}
  */
  readonly developerAppInsightsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html#display_name BotWebApp#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html#endpoint BotWebApp#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html#location BotWebApp#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html#luis_app_ids BotWebApp#luis_app_ids}
  */
  readonly luisAppIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html#luis_key BotWebApp#luis_key}
  */
  readonly luisKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html#microsoft_app_id BotWebApp#microsoft_app_id}
  */
  readonly microsoftAppId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html#name BotWebApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html#resource_group_name BotWebApp#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html#sku BotWebApp#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html#tags BotWebApp#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html#timeouts BotWebApp#timeouts}
  */
  readonly timeouts?: BotWebAppTimeouts;
}
export interface BotWebAppTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html#create BotWebApp#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html#delete BotWebApp#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html#read BotWebApp#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html#update BotWebApp#update}
  */
  readonly update?: string;
}

function botWebAppTimeoutsToTerraform(struct?: BotWebAppTimeoutsOutputReference | BotWebAppTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class BotWebAppTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html azurerm_bot_web_app}
*/
export class BotWebApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_bot_web_app";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/bot_web_app.html azurerm_bot_web_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotWebAppConfig
  */
  public constructor(scope: Construct, id: string, config: BotWebAppConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bot_web_app',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._developerAppInsightsApiKey = config.developerAppInsightsApiKey;
    this._developerAppInsightsApplicationId = config.developerAppInsightsApplicationId;
    this._developerAppInsightsKey = config.developerAppInsightsKey;
    this._displayName = config.displayName;
    this._endpoint = config.endpoint;
    this._location = config.location;
    this._luisAppIds = config.luisAppIds;
    this._luisKey = config.luisKey;
    this._microsoftAppId = config.microsoftAppId;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // developer_app_insights_api_key - computed: true, optional: true, required: false
  private _developerAppInsightsApiKey?: string | undefined; 
  public get developerAppInsightsApiKey() {
    return this.getStringAttribute('developer_app_insights_api_key');
  }
  public set developerAppInsightsApiKey(value: string | undefined) {
    this._developerAppInsightsApiKey = value;
  }
  public resetDeveloperAppInsightsApiKey() {
    this._developerAppInsightsApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerAppInsightsApiKeyInput() {
    return this._developerAppInsightsApiKey
  }

  // developer_app_insights_application_id - computed: true, optional: true, required: false
  private _developerAppInsightsApplicationId?: string | undefined; 
  public get developerAppInsightsApplicationId() {
    return this.getStringAttribute('developer_app_insights_application_id');
  }
  public set developerAppInsightsApplicationId(value: string | undefined) {
    this._developerAppInsightsApplicationId = value;
  }
  public resetDeveloperAppInsightsApplicationId() {
    this._developerAppInsightsApplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerAppInsightsApplicationIdInput() {
    return this._developerAppInsightsApplicationId
  }

  // developer_app_insights_key - computed: true, optional: true, required: false
  private _developerAppInsightsKey?: string | undefined; 
  public get developerAppInsightsKey() {
    return this.getStringAttribute('developer_app_insights_key');
  }
  public set developerAppInsightsKey(value: string | undefined) {
    this._developerAppInsightsKey = value;
  }
  public resetDeveloperAppInsightsKey() {
    this._developerAppInsightsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerAppInsightsKeyInput() {
    return this._developerAppInsightsKey
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string | undefined; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string | undefined; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._location
  }

  // luis_app_ids - computed: false, optional: true, required: false
  private _luisAppIds?: string[] | undefined; 
  public get luisAppIds() {
    return this.getListAttribute('luis_app_ids');
  }
  public set luisAppIds(value: string[] | undefined) {
    this._luisAppIds = value;
  }
  public resetLuisAppIds() {
    this._luisAppIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luisAppIdsInput() {
    return this._luisAppIds
  }

  // luis_key - computed: false, optional: true, required: false
  private _luisKey?: string | undefined; 
  public get luisKey() {
    return this.getStringAttribute('luis_key');
  }
  public set luisKey(value: string | undefined) {
    this._luisKey = value;
  }
  public resetLuisKey() {
    this._luisKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luisKeyInput() {
    return this._luisKey
  }

  // microsoft_app_id - computed: false, optional: false, required: true
  private _microsoftAppId?: string; 
  public get microsoftAppId() {
    return this.getStringAttribute('microsoft_app_id');
  }
  public set microsoftAppId(value: string) {
    this._microsoftAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftAppIdInput() {
    return this._microsoftAppId
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
    return this._name
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
    return this._resourceGroupName
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BotWebAppTimeouts | undefined; 
  private __timeoutsOutput = new BotWebAppTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: BotWebAppTimeouts | undefined) {
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
      developer_app_insights_api_key: cdktf.stringToTerraform(this._developerAppInsightsApiKey),
      developer_app_insights_application_id: cdktf.stringToTerraform(this._developerAppInsightsApplicationId),
      developer_app_insights_key: cdktf.stringToTerraform(this._developerAppInsightsKey),
      display_name: cdktf.stringToTerraform(this._displayName),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      location: cdktf.stringToTerraform(this._location),
      luis_app_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._luisAppIds),
      luis_key: cdktf.stringToTerraform(this._luisKey),
      microsoft_app_id: cdktf.stringToTerraform(this._microsoftAppId),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: botWebAppTimeoutsToTerraform(this._timeouts),
    };
  }
}
