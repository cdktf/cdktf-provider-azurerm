# `applicationInsightsWebTest` Submodule <a name="`applicationInsightsWebTest` Submodule" id="@cdktf/provider-azurerm.applicationInsightsWebTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsightsWebTest <a name="ApplicationInsightsWebTest" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test azurerm_application_insights_web_test}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_web_test

applicationInsightsWebTest.ApplicationInsightsWebTest(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_insights_id: str,
  configuration: str,
  geo_locations: typing.List[str],
  kind: str,
  location: str,
  name: str,
  resource_group_name: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  frequency: typing.Union[int, float] = None,
  id: str = None,
  retry_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeout: typing.Union[int, float] = None,
  timeouts: ApplicationInsightsWebTestTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.applicationInsightsId">application_insights_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#application_insights_id ApplicationInsightsWebTest#application_insights_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.configuration">configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#configuration ApplicationInsightsWebTest#configuration}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.geoLocations">geo_locations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#geo_locations ApplicationInsightsWebTest#geo_locations}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#kind ApplicationInsightsWebTest#kind}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#location ApplicationInsightsWebTest#location}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#name ApplicationInsightsWebTest#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#resource_group_name ApplicationInsightsWebTest#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#description ApplicationInsightsWebTest#description}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#enabled ApplicationInsightsWebTest#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.frequency">frequency</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#frequency ApplicationInsightsWebTest#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#id ApplicationInsightsWebTest#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.retryEnabled">retry_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#retry_enabled ApplicationInsightsWebTest#retry_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#tags ApplicationInsightsWebTest#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#timeout ApplicationInsightsWebTest#timeout}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts">ApplicationInsightsWebTestTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_insights_id`<sup>Required</sup> <a name="application_insights_id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.applicationInsightsId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#application_insights_id ApplicationInsightsWebTest#application_insights_id}.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.configuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#configuration ApplicationInsightsWebTest#configuration}.

---

##### `geo_locations`<sup>Required</sup> <a name="geo_locations" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.geoLocations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#geo_locations ApplicationInsightsWebTest#geo_locations}.

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.kind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#kind ApplicationInsightsWebTest#kind}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#location ApplicationInsightsWebTest#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#name ApplicationInsightsWebTest#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#resource_group_name ApplicationInsightsWebTest#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#description ApplicationInsightsWebTest#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#enabled ApplicationInsightsWebTest#enabled}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.frequency"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#frequency ApplicationInsightsWebTest#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#id ApplicationInsightsWebTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retry_enabled`<sup>Optional</sup> <a name="retry_enabled" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.retryEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#retry_enabled ApplicationInsightsWebTest#retry_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#tags ApplicationInsightsWebTest#tags}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#timeout ApplicationInsightsWebTest#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts">ApplicationInsightsWebTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#timeouts ApplicationInsightsWebTest#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetRetryEnabled">reset_retry_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#create ApplicationInsightsWebTest#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#delete ApplicationInsightsWebTest#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#read ApplicationInsightsWebTest#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#update ApplicationInsightsWebTest#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_frequency` <a name="reset_frequency" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_retry_enabled` <a name="reset_retry_enabled" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetRetryEnabled"></a>

```python
def reset_retry_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApplicationInsightsWebTest resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_web_test

applicationInsightsWebTest.ApplicationInsightsWebTest.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_web_test

applicationInsightsWebTest.ApplicationInsightsWebTest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_web_test

applicationInsightsWebTest.ApplicationInsightsWebTest.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_web_test

applicationInsightsWebTest.ApplicationInsightsWebTest.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApplicationInsightsWebTest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApplicationInsightsWebTest to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApplicationInsightsWebTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationInsightsWebTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.syntheticMonitorId">synthetic_monitor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference">ApplicationInsightsWebTestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.applicationInsightsIdInput">application_insights_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.configurationInput">configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.frequencyInput">frequency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.geoLocationsInput">geo_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.retryEnabledInput">retry_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts">ApplicationInsightsWebTestTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.applicationInsightsId">application_insights_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.configuration">configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.frequency">frequency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.geoLocations">geo_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.retryEnabled">retry_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `synthetic_monitor_id`<sup>Required</sup> <a name="synthetic_monitor_id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.syntheticMonitorId"></a>

```python
synthetic_monitor_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.timeouts"></a>

```python
timeouts: ApplicationInsightsWebTestTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference">ApplicationInsightsWebTestTimeoutsOutputReference</a>

---

##### `application_insights_id_input`<sup>Optional</sup> <a name="application_insights_id_input" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.applicationInsightsIdInput"></a>

```python
application_insights_id_input: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.configurationInput"></a>

```python
configuration_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.frequencyInput"></a>

```python
frequency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `geo_locations_input`<sup>Optional</sup> <a name="geo_locations_input" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.geoLocationsInput"></a>

```python
geo_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `retry_enabled_input`<sup>Optional</sup> <a name="retry_enabled_input" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.retryEnabledInput"></a>

```python
retry_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApplicationInsightsWebTestTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts">ApplicationInsightsWebTestTimeouts</a>]

---

##### `application_insights_id`<sup>Required</sup> <a name="application_insights_id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.applicationInsightsId"></a>

```python
application_insights_id: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.frequency"></a>

```python
frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `geo_locations`<sup>Required</sup> <a name="geo_locations" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.geoLocations"></a>

```python
geo_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `retry_enabled`<sup>Required</sup> <a name="retry_enabled" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.retryEnabled"></a>

```python
retry_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsWebTestConfig <a name="ApplicationInsightsWebTestConfig" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_web_test

applicationInsightsWebTest.ApplicationInsightsWebTestConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_insights_id: str,
  configuration: str,
  geo_locations: typing.List[str],
  kind: str,
  location: str,
  name: str,
  resource_group_name: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  frequency: typing.Union[int, float] = None,
  id: str = None,
  retry_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeout: typing.Union[int, float] = None,
  timeouts: ApplicationInsightsWebTestTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.applicationInsightsId">application_insights_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#application_insights_id ApplicationInsightsWebTest#application_insights_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.configuration">configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#configuration ApplicationInsightsWebTest#configuration}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.geoLocations">geo_locations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#geo_locations ApplicationInsightsWebTest#geo_locations}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#kind ApplicationInsightsWebTest#kind}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#location ApplicationInsightsWebTest#location}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#name ApplicationInsightsWebTest#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#resource_group_name ApplicationInsightsWebTest#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#description ApplicationInsightsWebTest#description}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#enabled ApplicationInsightsWebTest#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.frequency">frequency</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#frequency ApplicationInsightsWebTest#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#id ApplicationInsightsWebTest#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.retryEnabled">retry_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#retry_enabled ApplicationInsightsWebTest#retry_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#tags ApplicationInsightsWebTest#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#timeout ApplicationInsightsWebTest#timeout}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts">ApplicationInsightsWebTestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_insights_id`<sup>Required</sup> <a name="application_insights_id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.applicationInsightsId"></a>

```python
application_insights_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#application_insights_id ApplicationInsightsWebTest#application_insights_id}.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#configuration ApplicationInsightsWebTest#configuration}.

---

##### `geo_locations`<sup>Required</sup> <a name="geo_locations" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.geoLocations"></a>

```python
geo_locations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#geo_locations ApplicationInsightsWebTest#geo_locations}.

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#kind ApplicationInsightsWebTest#kind}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#location ApplicationInsightsWebTest#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#name ApplicationInsightsWebTest#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#resource_group_name ApplicationInsightsWebTest#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#description ApplicationInsightsWebTest#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#enabled ApplicationInsightsWebTest#enabled}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.frequency"></a>

```python
frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#frequency ApplicationInsightsWebTest#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#id ApplicationInsightsWebTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retry_enabled`<sup>Optional</sup> <a name="retry_enabled" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.retryEnabled"></a>

```python
retry_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#retry_enabled ApplicationInsightsWebTest#retry_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#tags ApplicationInsightsWebTest#tags}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#timeout ApplicationInsightsWebTest#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestConfig.property.timeouts"></a>

```python
timeouts: ApplicationInsightsWebTestTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts">ApplicationInsightsWebTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#timeouts ApplicationInsightsWebTest#timeouts}

---

### ApplicationInsightsWebTestTimeouts <a name="ApplicationInsightsWebTestTimeouts" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_web_test

applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#create ApplicationInsightsWebTest#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#delete ApplicationInsightsWebTest#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#read ApplicationInsightsWebTest#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#update ApplicationInsightsWebTest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#create ApplicationInsightsWebTest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#delete ApplicationInsightsWebTest#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#read ApplicationInsightsWebTest#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/application_insights_web_test#update ApplicationInsightsWebTest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsWebTestTimeoutsOutputReference <a name="ApplicationInsightsWebTestTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_web_test

applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts">ApplicationInsightsWebTestTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationInsightsWebTestTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.applicationInsightsWebTest.ApplicationInsightsWebTestTimeouts">ApplicationInsightsWebTestTimeouts</a>]

---



