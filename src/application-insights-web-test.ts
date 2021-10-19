// https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationInsightsWebTestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html#application_insights_id ApplicationInsightsWebTest#application_insights_id}
  */
  readonly applicationInsightsId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html#configuration ApplicationInsightsWebTest#configuration}
  */
  readonly configuration: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html#description ApplicationInsightsWebTest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html#enabled ApplicationInsightsWebTest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html#frequency ApplicationInsightsWebTest#frequency}
  */
  readonly frequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html#geo_locations ApplicationInsightsWebTest#geo_locations}
  */
  readonly geoLocations: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html#kind ApplicationInsightsWebTest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html#location ApplicationInsightsWebTest#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html#name ApplicationInsightsWebTest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html#resource_group_name ApplicationInsightsWebTest#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html#retry_enabled ApplicationInsightsWebTest#retry_enabled}
  */
  readonly retryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html#tags ApplicationInsightsWebTest#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html#timeout ApplicationInsightsWebTest#timeout}
  */
  readonly timeout?: number;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html#timeouts ApplicationInsightsWebTest#timeouts}
  */
  readonly timeouts?: ApplicationInsightsWebTestTimeouts;
}
export interface ApplicationInsightsWebTestTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html#create ApplicationInsightsWebTest#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html#delete ApplicationInsightsWebTest#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html#read ApplicationInsightsWebTest#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html#update ApplicationInsightsWebTest#update}
  */
  readonly update?: string;
}

function applicationInsightsWebTestTimeoutsToTerraform(struct?: ApplicationInsightsWebTestTimeoutsOutputReference | ApplicationInsightsWebTestTimeouts): any {
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

export class ApplicationInsightsWebTestTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html azurerm_application_insights_web_test}
*/
export class ApplicationInsightsWebTest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_application_insights_web_test";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html azurerm_application_insights_web_test} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationInsightsWebTestConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationInsightsWebTestConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_application_insights_web_test',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationInsightsId = config.applicationInsightsId;
    this._configuration = config.configuration;
    this._description = config.description;
    this._enabled = config.enabled;
    this._frequency = config.frequency;
    this._geoLocations = config.geoLocations;
    this._kind = config.kind;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._retryEnabled = config.retryEnabled;
    this._tags = config.tags;
    this._timeout = config.timeout;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_insights_id - computed: false, optional: false, required: true
  private _applicationInsightsId?: string; 
  public get applicationInsightsId() {
    return this.getStringAttribute('application_insights_id');
  }
  public set applicationInsightsId(value: string) {
    this._applicationInsightsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInsightsIdInput() {
    return this._applicationInsightsId
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: number | undefined; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number | undefined) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency
  }

  // geo_locations - computed: false, optional: false, required: true
  private _geoLocations?: string[]; 
  public get geoLocations() {
    return this.getListAttribute('geo_locations');
  }
  public set geoLocations(value: string[]) {
    this._geoLocations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationsInput() {
    return this._geoLocations
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
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

  // retry_enabled - computed: false, optional: true, required: false
  private _retryEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get retryEnabled() {
    return this.getBooleanAttribute('retry_enabled') as any;
  }
  public set retryEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._retryEnabled = value;
  }
  public resetRetryEnabled() {
    this._retryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryEnabledInput() {
    return this._retryEnabled
  }

  // synthetic_monitor_id - computed: true, optional: false, required: false
  public get syntheticMonitorId() {
    return this.getStringAttribute('synthetic_monitor_id');
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number | undefined; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApplicationInsightsWebTestTimeouts | undefined; 
  private __timeoutsOutput = new ApplicationInsightsWebTestTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApplicationInsightsWebTestTimeouts | undefined) {
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
      application_insights_id: cdktf.stringToTerraform(this._applicationInsightsId),
      configuration: cdktf.stringToTerraform(this._configuration),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      frequency: cdktf.numberToTerraform(this._frequency),
      geo_locations: cdktf.listMapper(cdktf.stringToTerraform)(this._geoLocations),
      kind: cdktf.stringToTerraform(this._kind),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      retry_enabled: cdktf.booleanToTerraform(this._retryEnabled),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeout: cdktf.numberToTerraform(this._timeout),
      timeouts: applicationInsightsWebTestTimeoutsToTerraform(this._timeouts),
    };
  }
}
