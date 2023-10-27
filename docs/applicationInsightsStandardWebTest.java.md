# `azurerm_application_insights_standard_web_test`

Refer to the Terraform Registory for docs: [`azurerm_application_insights_standard_web_test`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test).

# `applicationInsightsStandardWebTest` Submodule <a name="`applicationInsightsStandardWebTest` Submodule" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsightsStandardWebTest <a name="ApplicationInsightsStandardWebTest" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test azurerm_application_insights_standard_web_test}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights_standard_web_test.ApplicationInsightsStandardWebTest;

ApplicationInsightsStandardWebTest.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .applicationInsightsId(java.lang.String)
    .geoLocations(java.util.List<java.lang.String>)
    .location(java.lang.String)
    .name(java.lang.String)
    .request(ApplicationInsightsStandardWebTestRequest)
    .resourceGroupName(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .frequency(java.lang.Number)
//  .id(java.lang.String)
//  .retryEnabled(java.lang.Boolean)
//  .retryEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeout(java.lang.Number)
//  .timeouts(ApplicationInsightsStandardWebTestTimeouts)
//  .validationRules(ApplicationInsightsStandardWebTestValidationRules)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.applicationInsightsId">applicationInsightsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#application_insights_id ApplicationInsightsStandardWebTest#application_insights_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.geoLocations">geoLocations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#geo_locations ApplicationInsightsStandardWebTest#geo_locations}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#location ApplicationInsightsStandardWebTest#location}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#name ApplicationInsightsStandardWebTest#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.request">request</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a></code> | request block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#resource_group_name ApplicationInsightsStandardWebTest#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#description ApplicationInsightsStandardWebTest#description}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#enabled ApplicationInsightsStandardWebTest#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.frequency">frequency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#frequency ApplicationInsightsStandardWebTest#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#id ApplicationInsightsStandardWebTest#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.retryEnabled">retryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#retry_enabled ApplicationInsightsStandardWebTest#retry_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#tags ApplicationInsightsStandardWebTest#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#timeout ApplicationInsightsStandardWebTest#timeout}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts">ApplicationInsightsStandardWebTestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.validationRules">validationRules</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a></code> | validation_rules block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationInsightsId`<sup>Required</sup> <a name="applicationInsightsId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.applicationInsightsId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#application_insights_id ApplicationInsightsStandardWebTest#application_insights_id}.

---

##### `geoLocations`<sup>Required</sup> <a name="geoLocations" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.geoLocations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#geo_locations ApplicationInsightsStandardWebTest#geo_locations}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#location ApplicationInsightsStandardWebTest#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#name ApplicationInsightsStandardWebTest#name}.

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.request"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a>

request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#request ApplicationInsightsStandardWebTest#request}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#resource_group_name ApplicationInsightsStandardWebTest#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#description ApplicationInsightsStandardWebTest#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#enabled ApplicationInsightsStandardWebTest#enabled}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.frequency"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#frequency ApplicationInsightsStandardWebTest#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#id ApplicationInsightsStandardWebTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retryEnabled`<sup>Optional</sup> <a name="retryEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.retryEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#retry_enabled ApplicationInsightsStandardWebTest#retry_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#tags ApplicationInsightsStandardWebTest#tags}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.timeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#timeout ApplicationInsightsStandardWebTest#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts">ApplicationInsightsStandardWebTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#timeouts ApplicationInsightsStandardWebTest#timeouts}

---

##### `validationRules`<sup>Optional</sup> <a name="validationRules" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.Initializer.parameter.validationRules"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a>

validation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#validation_rules ApplicationInsightsStandardWebTest#validation_rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putRequest">putRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putValidationRules">putValidationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetRetryEnabled">resetRetryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetValidationRules">resetValidationRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putRequest` <a name="putRequest" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putRequest"></a>

```java
public void putRequest(ApplicationInsightsStandardWebTestRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putTimeouts"></a>

```java
public void putTimeouts(ApplicationInsightsStandardWebTestTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts">ApplicationInsightsStandardWebTestTimeouts</a>

---

##### `putValidationRules` <a name="putValidationRules" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putValidationRules"></a>

```java
public void putValidationRules(ApplicationInsightsStandardWebTestValidationRules value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.putValidationRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetFrequency"></a>

```java
public void resetFrequency()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetId"></a>

```java
public void resetId()
```

##### `resetRetryEnabled` <a name="resetRetryEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetRetryEnabled"></a>

```java
public void resetRetryEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetValidationRules` <a name="resetValidationRules" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.resetValidationRules"></a>

```java
public void resetValidationRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationInsightsStandardWebTest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights_standard_web_test.ApplicationInsightsStandardWebTest;

ApplicationInsightsStandardWebTest.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights_standard_web_test.ApplicationInsightsStandardWebTest;

ApplicationInsightsStandardWebTest.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights_standard_web_test.ApplicationInsightsStandardWebTest;

ApplicationInsightsStandardWebTest.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights_standard_web_test.ApplicationInsightsStandardWebTest;

ApplicationInsightsStandardWebTest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApplicationInsightsStandardWebTest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApplicationInsightsStandardWebTest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApplicationInsightsStandardWebTest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApplicationInsightsStandardWebTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationInsightsStandardWebTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.request">request</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference">ApplicationInsightsStandardWebTestRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.syntheticMonitorId">syntheticMonitorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference">ApplicationInsightsStandardWebTestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.validationRules">validationRules</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference">ApplicationInsightsStandardWebTestValidationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.applicationInsightsIdInput">applicationInsightsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.geoLocationsInput">geoLocationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.requestInput">requestInput</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.retryEnabledInput">retryEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts">ApplicationInsightsStandardWebTestTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.validationRulesInput">validationRulesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.applicationInsightsId">applicationInsightsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.frequency">frequency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.geoLocations">geoLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.retryEnabled">retryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.request"></a>

```java
public ApplicationInsightsStandardWebTestRequestOutputReference getRequest();
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference">ApplicationInsightsStandardWebTestRequestOutputReference</a>

---

##### `syntheticMonitorId`<sup>Required</sup> <a name="syntheticMonitorId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.syntheticMonitorId"></a>

```java
public java.lang.String getSyntheticMonitorId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeouts"></a>

```java
public ApplicationInsightsStandardWebTestTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference">ApplicationInsightsStandardWebTestTimeoutsOutputReference</a>

---

##### `validationRules`<sup>Required</sup> <a name="validationRules" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.validationRules"></a>

```java
public ApplicationInsightsStandardWebTestValidationRulesOutputReference getValidationRules();
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference">ApplicationInsightsStandardWebTestValidationRulesOutputReference</a>

---

##### `applicationInsightsIdInput`<sup>Optional</sup> <a name="applicationInsightsIdInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.applicationInsightsIdInput"></a>

```java
public java.lang.String getApplicationInsightsIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.frequencyInput"></a>

```java
public java.lang.Number getFrequencyInput();
```

- *Type:* java.lang.Number

---

##### `geoLocationsInput`<sup>Optional</sup> <a name="geoLocationsInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.geoLocationsInput"></a>

```java
public java.util.List<java.lang.String> getGeoLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.requestInput"></a>

```java
public ApplicationInsightsStandardWebTestRequest getRequestInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `retryEnabledInput`<sup>Optional</sup> <a name="retryEnabledInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.retryEnabledInput"></a>

```java
public java.lang.Object getRetryEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts">ApplicationInsightsStandardWebTestTimeouts</a>

---

##### `validationRulesInput`<sup>Optional</sup> <a name="validationRulesInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.validationRulesInput"></a>

```java
public ApplicationInsightsStandardWebTestValidationRules getValidationRulesInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a>

---

##### `applicationInsightsId`<sup>Required</sup> <a name="applicationInsightsId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.applicationInsightsId"></a>

```java
public java.lang.String getApplicationInsightsId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.frequency"></a>

```java
public java.lang.Number getFrequency();
```

- *Type:* java.lang.Number

---

##### `geoLocations`<sup>Required</sup> <a name="geoLocations" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.geoLocations"></a>

```java
public java.util.List<java.lang.String> getGeoLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `retryEnabled`<sup>Required</sup> <a name="retryEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.retryEnabled"></a>

```java
public java.lang.Object getRetryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTest.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsStandardWebTestConfig <a name="ApplicationInsightsStandardWebTestConfig" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights_standard_web_test.ApplicationInsightsStandardWebTestConfig;

ApplicationInsightsStandardWebTestConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .applicationInsightsId(java.lang.String)
    .geoLocations(java.util.List<java.lang.String>)
    .location(java.lang.String)
    .name(java.lang.String)
    .request(ApplicationInsightsStandardWebTestRequest)
    .resourceGroupName(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .frequency(java.lang.Number)
//  .id(java.lang.String)
//  .retryEnabled(java.lang.Boolean)
//  .retryEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeout(java.lang.Number)
//  .timeouts(ApplicationInsightsStandardWebTestTimeouts)
//  .validationRules(ApplicationInsightsStandardWebTestValidationRules)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.applicationInsightsId">applicationInsightsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#application_insights_id ApplicationInsightsStandardWebTest#application_insights_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.geoLocations">geoLocations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#geo_locations ApplicationInsightsStandardWebTest#geo_locations}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#location ApplicationInsightsStandardWebTest#location}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#name ApplicationInsightsStandardWebTest#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.request">request</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a></code> | request block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#resource_group_name ApplicationInsightsStandardWebTest#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#description ApplicationInsightsStandardWebTest#description}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#enabled ApplicationInsightsStandardWebTest#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.frequency">frequency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#frequency ApplicationInsightsStandardWebTest#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#id ApplicationInsightsStandardWebTest#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.retryEnabled">retryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#retry_enabled ApplicationInsightsStandardWebTest#retry_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#tags ApplicationInsightsStandardWebTest#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#timeout ApplicationInsightsStandardWebTest#timeout}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts">ApplicationInsightsStandardWebTestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.validationRules">validationRules</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a></code> | validation_rules block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationInsightsId`<sup>Required</sup> <a name="applicationInsightsId" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.applicationInsightsId"></a>

```java
public java.lang.String getApplicationInsightsId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#application_insights_id ApplicationInsightsStandardWebTest#application_insights_id}.

---

##### `geoLocations`<sup>Required</sup> <a name="geoLocations" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.geoLocations"></a>

```java
public java.util.List<java.lang.String> getGeoLocations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#geo_locations ApplicationInsightsStandardWebTest#geo_locations}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#location ApplicationInsightsStandardWebTest#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#name ApplicationInsightsStandardWebTest#name}.

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.request"></a>

```java
public ApplicationInsightsStandardWebTestRequest getRequest();
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a>

request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#request ApplicationInsightsStandardWebTest#request}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#resource_group_name ApplicationInsightsStandardWebTest#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#description ApplicationInsightsStandardWebTest#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#enabled ApplicationInsightsStandardWebTest#enabled}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.frequency"></a>

```java
public java.lang.Number getFrequency();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#frequency ApplicationInsightsStandardWebTest#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#id ApplicationInsightsStandardWebTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retryEnabled`<sup>Optional</sup> <a name="retryEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.retryEnabled"></a>

```java
public java.lang.Object getRetryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#retry_enabled ApplicationInsightsStandardWebTest#retry_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#tags ApplicationInsightsStandardWebTest#tags}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#timeout ApplicationInsightsStandardWebTest#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.timeouts"></a>

```java
public ApplicationInsightsStandardWebTestTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts">ApplicationInsightsStandardWebTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#timeouts ApplicationInsightsStandardWebTest#timeouts}

---

##### `validationRules`<sup>Optional</sup> <a name="validationRules" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestConfig.property.validationRules"></a>

```java
public ApplicationInsightsStandardWebTestValidationRules getValidationRules();
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a>

validation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#validation_rules ApplicationInsightsStandardWebTest#validation_rules}

---

### ApplicationInsightsStandardWebTestRequest <a name="ApplicationInsightsStandardWebTestRequest" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights_standard_web_test.ApplicationInsightsStandardWebTestRequest;

ApplicationInsightsStandardWebTestRequest.builder()
    .url(java.lang.String)
//  .body(java.lang.String)
//  .followRedirectsEnabled(java.lang.Boolean)
//  .followRedirectsEnabled(IResolvable)
//  .header(IResolvable)
//  .header(java.util.List<ApplicationInsightsStandardWebTestRequestHeader>)
//  .httpVerb(java.lang.String)
//  .parseDependentRequestsEnabled(java.lang.Boolean)
//  .parseDependentRequestsEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#url ApplicationInsightsStandardWebTest#url}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.body">body</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#body ApplicationInsightsStandardWebTest#body}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.followRedirectsEnabled">followRedirectsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#follow_redirects_enabled ApplicationInsightsStandardWebTest#follow_redirects_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader">ApplicationInsightsStandardWebTestRequestHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.httpVerb">httpVerb</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#http_verb ApplicationInsightsStandardWebTest#http_verb}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.parseDependentRequestsEnabled">parseDependentRequestsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#parse_dependent_requests_enabled ApplicationInsightsStandardWebTest#parse_dependent_requests_enabled}. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#url ApplicationInsightsStandardWebTest#url}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#body ApplicationInsightsStandardWebTest#body}.

---

##### `followRedirectsEnabled`<sup>Optional</sup> <a name="followRedirectsEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.followRedirectsEnabled"></a>

```java
public java.lang.Object getFollowRedirectsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#follow_redirects_enabled ApplicationInsightsStandardWebTest#follow_redirects_enabled}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader">ApplicationInsightsStandardWebTestRequestHeader</a>>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#header ApplicationInsightsStandardWebTest#header}

---

##### `httpVerb`<sup>Optional</sup> <a name="httpVerb" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.httpVerb"></a>

```java
public java.lang.String getHttpVerb();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#http_verb ApplicationInsightsStandardWebTest#http_verb}.

---

##### `parseDependentRequestsEnabled`<sup>Optional</sup> <a name="parseDependentRequestsEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest.property.parseDependentRequestsEnabled"></a>

```java
public java.lang.Object getParseDependentRequestsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#parse_dependent_requests_enabled ApplicationInsightsStandardWebTest#parse_dependent_requests_enabled}.

---

### ApplicationInsightsStandardWebTestRequestHeader <a name="ApplicationInsightsStandardWebTestRequestHeader" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights_standard_web_test.ApplicationInsightsStandardWebTestRequestHeader;

ApplicationInsightsStandardWebTestRequestHeader.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#name ApplicationInsightsStandardWebTest#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#value ApplicationInsightsStandardWebTest#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#name ApplicationInsightsStandardWebTest#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#value ApplicationInsightsStandardWebTest#value}.

---

### ApplicationInsightsStandardWebTestTimeouts <a name="ApplicationInsightsStandardWebTestTimeouts" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights_standard_web_test.ApplicationInsightsStandardWebTestTimeouts;

ApplicationInsightsStandardWebTestTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#create ApplicationInsightsStandardWebTest#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#delete ApplicationInsightsStandardWebTest#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#read ApplicationInsightsStandardWebTest#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#update ApplicationInsightsStandardWebTest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#create ApplicationInsightsStandardWebTest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#delete ApplicationInsightsStandardWebTest#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#read ApplicationInsightsStandardWebTest#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#update ApplicationInsightsStandardWebTest#update}.

---

### ApplicationInsightsStandardWebTestValidationRules <a name="ApplicationInsightsStandardWebTestValidationRules" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights_standard_web_test.ApplicationInsightsStandardWebTestValidationRules;

ApplicationInsightsStandardWebTestValidationRules.builder()
//  .content(ApplicationInsightsStandardWebTestValidationRulesContent)
//  .expectedStatusCode(java.lang.Number)
//  .sslCertRemainingLifetime(java.lang.Number)
//  .sslCheckEnabled(java.lang.Boolean)
//  .sslCheckEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.content">content</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a></code> | content block. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.expectedStatusCode">expectedStatusCode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#expected_status_code ApplicationInsightsStandardWebTest#expected_status_code}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.sslCertRemainingLifetime">sslCertRemainingLifetime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#ssl_cert_remaining_lifetime ApplicationInsightsStandardWebTest#ssl_cert_remaining_lifetime}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.sslCheckEnabled">sslCheckEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#ssl_check_enabled ApplicationInsightsStandardWebTest#ssl_check_enabled}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.content"></a>

```java
public ApplicationInsightsStandardWebTestValidationRulesContent getContent();
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a>

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#content ApplicationInsightsStandardWebTest#content}

---

##### `expectedStatusCode`<sup>Optional</sup> <a name="expectedStatusCode" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.expectedStatusCode"></a>

```java
public java.lang.Number getExpectedStatusCode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#expected_status_code ApplicationInsightsStandardWebTest#expected_status_code}.

---

##### `sslCertRemainingLifetime`<sup>Optional</sup> <a name="sslCertRemainingLifetime" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.sslCertRemainingLifetime"></a>

```java
public java.lang.Number getSslCertRemainingLifetime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#ssl_cert_remaining_lifetime ApplicationInsightsStandardWebTest#ssl_cert_remaining_lifetime}.

---

##### `sslCheckEnabled`<sup>Optional</sup> <a name="sslCheckEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules.property.sslCheckEnabled"></a>

```java
public java.lang.Object getSslCheckEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#ssl_check_enabled ApplicationInsightsStandardWebTest#ssl_check_enabled}.

---

### ApplicationInsightsStandardWebTestValidationRulesContent <a name="ApplicationInsightsStandardWebTestValidationRulesContent" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights_standard_web_test.ApplicationInsightsStandardWebTestValidationRulesContent;

ApplicationInsightsStandardWebTestValidationRulesContent.builder()
    .contentMatch(java.lang.String)
//  .ignoreCase(java.lang.Boolean)
//  .ignoreCase(IResolvable)
//  .passIfTextFound(java.lang.Boolean)
//  .passIfTextFound(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.property.contentMatch">contentMatch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#content_match ApplicationInsightsStandardWebTest#content_match}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#ignore_case ApplicationInsightsStandardWebTest#ignore_case}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.property.passIfTextFound">passIfTextFound</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#pass_if_text_found ApplicationInsightsStandardWebTest#pass_if_text_found}. |

---

##### `contentMatch`<sup>Required</sup> <a name="contentMatch" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.property.contentMatch"></a>

```java
public java.lang.String getContentMatch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#content_match ApplicationInsightsStandardWebTest#content_match}.

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#ignore_case ApplicationInsightsStandardWebTest#ignore_case}.

---

##### `passIfTextFound`<sup>Optional</sup> <a name="passIfTextFound" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent.property.passIfTextFound"></a>

```java
public java.lang.Object getPassIfTextFound();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/application_insights_standard_web_test#pass_if_text_found ApplicationInsightsStandardWebTest#pass_if_text_found}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsStandardWebTestRequestHeaderList <a name="ApplicationInsightsStandardWebTestRequestHeaderList" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights_standard_web_test.ApplicationInsightsStandardWebTestRequestHeaderList;

new ApplicationInsightsStandardWebTestRequestHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.get"></a>

```java
public ApplicationInsightsStandardWebTestRequestHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader">ApplicationInsightsStandardWebTestRequestHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader">ApplicationInsightsStandardWebTestRequestHeader</a>>

---


### ApplicationInsightsStandardWebTestRequestHeaderOutputReference <a name="ApplicationInsightsStandardWebTestRequestHeaderOutputReference" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights_standard_web_test.ApplicationInsightsStandardWebTestRequestHeaderOutputReference;

new ApplicationInsightsStandardWebTestRequestHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader">ApplicationInsightsStandardWebTestRequestHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader">ApplicationInsightsStandardWebTestRequestHeader</a>

---


### ApplicationInsightsStandardWebTestRequestOutputReference <a name="ApplicationInsightsStandardWebTestRequestOutputReference" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights_standard_web_test.ApplicationInsightsStandardWebTestRequestOutputReference;

new ApplicationInsightsStandardWebTestRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetFollowRedirectsEnabled">resetFollowRedirectsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetHttpVerb">resetHttpVerb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetParseDependentRequestsEnabled">resetParseDependentRequestsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.putHeader"></a>

```java
public void putHeader(IResolvable OR java.util.List<ApplicationInsightsStandardWebTestRequestHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.putHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader">ApplicationInsightsStandardWebTestRequestHeader</a>>

---

##### `resetBody` <a name="resetBody" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetBody"></a>

```java
public void resetBody()
```

##### `resetFollowRedirectsEnabled` <a name="resetFollowRedirectsEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetFollowRedirectsEnabled"></a>

```java
public void resetFollowRedirectsEnabled()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetHttpVerb` <a name="resetHttpVerb" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetHttpVerb"></a>

```java
public void resetHttpVerb()
```

##### `resetParseDependentRequestsEnabled` <a name="resetParseDependentRequestsEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.resetParseDependentRequestsEnabled"></a>

```java
public void resetParseDependentRequestsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList">ApplicationInsightsStandardWebTestRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.followRedirectsEnabledInput">followRedirectsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.headerInput">headerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader">ApplicationInsightsStandardWebTestRequestHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.httpVerbInput">httpVerbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.parseDependentRequestsEnabledInput">parseDependentRequestsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.followRedirectsEnabled">followRedirectsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.httpVerb">httpVerb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.parseDependentRequestsEnabled">parseDependentRequestsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.header"></a>

```java
public ApplicationInsightsStandardWebTestRequestHeaderList getHeader();
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeaderList">ApplicationInsightsStandardWebTestRequestHeaderList</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `followRedirectsEnabledInput`<sup>Optional</sup> <a name="followRedirectsEnabledInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.followRedirectsEnabledInput"></a>

```java
public java.lang.Object getFollowRedirectsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.headerInput"></a>

```java
public java.lang.Object getHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestHeader">ApplicationInsightsStandardWebTestRequestHeader</a>>

---

##### `httpVerbInput`<sup>Optional</sup> <a name="httpVerbInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.httpVerbInput"></a>

```java
public java.lang.String getHttpVerbInput();
```

- *Type:* java.lang.String

---

##### `parseDependentRequestsEnabledInput`<sup>Optional</sup> <a name="parseDependentRequestsEnabledInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.parseDependentRequestsEnabledInput"></a>

```java
public java.lang.Object getParseDependentRequestsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `followRedirectsEnabled`<sup>Required</sup> <a name="followRedirectsEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.followRedirectsEnabled"></a>

```java
public java.lang.Object getFollowRedirectsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `httpVerb`<sup>Required</sup> <a name="httpVerb" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.httpVerb"></a>

```java
public java.lang.String getHttpVerb();
```

- *Type:* java.lang.String

---

##### `parseDependentRequestsEnabled`<sup>Required</sup> <a name="parseDependentRequestsEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.parseDependentRequestsEnabled"></a>

```java
public java.lang.Object getParseDependentRequestsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequestOutputReference.property.internalValue"></a>

```java
public ApplicationInsightsStandardWebTestRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestRequest">ApplicationInsightsStandardWebTestRequest</a>

---


### ApplicationInsightsStandardWebTestTimeoutsOutputReference <a name="ApplicationInsightsStandardWebTestTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights_standard_web_test.ApplicationInsightsStandardWebTestTimeoutsOutputReference;

new ApplicationInsightsStandardWebTestTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts">ApplicationInsightsStandardWebTestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestTimeouts">ApplicationInsightsStandardWebTestTimeouts</a>

---


### ApplicationInsightsStandardWebTestValidationRulesContentOutputReference <a name="ApplicationInsightsStandardWebTestValidationRulesContentOutputReference" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights_standard_web_test.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference;

new ApplicationInsightsStandardWebTestValidationRulesContentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resetPassIfTextFound">resetPassIfTextFound</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resetIgnoreCase"></a>

```java
public void resetIgnoreCase()
```

##### `resetPassIfTextFound` <a name="resetPassIfTextFound" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.resetPassIfTextFound"></a>

```java
public void resetPassIfTextFound()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.contentMatchInput">contentMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.passIfTextFoundInput">passIfTextFoundInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.contentMatch">contentMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.passIfTextFound">passIfTextFound</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentMatchInput`<sup>Optional</sup> <a name="contentMatchInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.contentMatchInput"></a>

```java
public java.lang.String getContentMatchInput();
```

- *Type:* java.lang.String

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.ignoreCaseInput"></a>

```java
public java.lang.Object getIgnoreCaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passIfTextFoundInput`<sup>Optional</sup> <a name="passIfTextFoundInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.passIfTextFoundInput"></a>

```java
public java.lang.Object getPassIfTextFoundInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `contentMatch`<sup>Required</sup> <a name="contentMatch" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.contentMatch"></a>

```java
public java.lang.String getContentMatch();
```

- *Type:* java.lang.String

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passIfTextFound`<sup>Required</sup> <a name="passIfTextFound" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.passIfTextFound"></a>

```java
public java.lang.Object getPassIfTextFound();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference.property.internalValue"></a>

```java
public ApplicationInsightsStandardWebTestValidationRulesContent getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a>

---


### ApplicationInsightsStandardWebTestValidationRulesOutputReference <a name="ApplicationInsightsStandardWebTestValidationRulesOutputReference" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_insights_standard_web_test.ApplicationInsightsStandardWebTestValidationRulesOutputReference;

new ApplicationInsightsStandardWebTestValidationRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetExpectedStatusCode">resetExpectedStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetSslCertRemainingLifetime">resetSslCertRemainingLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetSslCheckEnabled">resetSslCheckEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContent` <a name="putContent" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.putContent"></a>

```java
public void putContent(ApplicationInsightsStandardWebTestValidationRulesContent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a>

---

##### `resetContent` <a name="resetContent" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetContent"></a>

```java
public void resetContent()
```

##### `resetExpectedStatusCode` <a name="resetExpectedStatusCode" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetExpectedStatusCode"></a>

```java
public void resetExpectedStatusCode()
```

##### `resetSslCertRemainingLifetime` <a name="resetSslCertRemainingLifetime" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetSslCertRemainingLifetime"></a>

```java
public void resetSslCertRemainingLifetime()
```

##### `resetSslCheckEnabled` <a name="resetSslCheckEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.resetSslCheckEnabled"></a>

```java
public void resetSslCheckEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.content">content</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference">ApplicationInsightsStandardWebTestValidationRulesContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.contentInput">contentInput</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.expectedStatusCodeInput">expectedStatusCodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCertRemainingLifetimeInput">sslCertRemainingLifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCheckEnabledInput">sslCheckEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.expectedStatusCode">expectedStatusCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCertRemainingLifetime">sslCertRemainingLifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCheckEnabled">sslCheckEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.content"></a>

```java
public ApplicationInsightsStandardWebTestValidationRulesContentOutputReference getContent();
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContentOutputReference">ApplicationInsightsStandardWebTestValidationRulesContentOutputReference</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.contentInput"></a>

```java
public ApplicationInsightsStandardWebTestValidationRulesContent getContentInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesContent">ApplicationInsightsStandardWebTestValidationRulesContent</a>

---

##### `expectedStatusCodeInput`<sup>Optional</sup> <a name="expectedStatusCodeInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.expectedStatusCodeInput"></a>

```java
public java.lang.Number getExpectedStatusCodeInput();
```

- *Type:* java.lang.Number

---

##### `sslCertRemainingLifetimeInput`<sup>Optional</sup> <a name="sslCertRemainingLifetimeInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCertRemainingLifetimeInput"></a>

```java
public java.lang.Number getSslCertRemainingLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `sslCheckEnabledInput`<sup>Optional</sup> <a name="sslCheckEnabledInput" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCheckEnabledInput"></a>

```java
public java.lang.Object getSslCheckEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expectedStatusCode`<sup>Required</sup> <a name="expectedStatusCode" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.expectedStatusCode"></a>

```java
public java.lang.Number getExpectedStatusCode();
```

- *Type:* java.lang.Number

---

##### `sslCertRemainingLifetime`<sup>Required</sup> <a name="sslCertRemainingLifetime" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCertRemainingLifetime"></a>

```java
public java.lang.Number getSslCertRemainingLifetime();
```

- *Type:* java.lang.Number

---

##### `sslCheckEnabled`<sup>Required</sup> <a name="sslCheckEnabled" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.sslCheckEnabled"></a>

```java
public java.lang.Object getSslCheckEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRulesOutputReference.property.internalValue"></a>

```java
public ApplicationInsightsStandardWebTestValidationRules getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsStandardWebTest.ApplicationInsightsStandardWebTestValidationRules">ApplicationInsightsStandardWebTestValidationRules</a>

---



