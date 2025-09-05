# `logAnalyticsQueryPackQuery` Submodule <a name="`logAnalyticsQueryPackQuery` Submodule" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsQueryPackQuery <a name="LogAnalyticsQueryPackQuery" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query azurerm_log_analytics_query_pack_query}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_query_pack_query

logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  body: str,
  display_name: str,
  query_pack_id: str,
  additional_settings_json: str = None,
  categories: typing.List[str] = None,
  description: str = None,
  id: str = None,
  name: str = None,
  resource_types: typing.List[str] = None,
  solutions: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  timeouts: LogAnalyticsQueryPackQueryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.body">body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#body LogAnalyticsQueryPackQuery#body}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#display_name LogAnalyticsQueryPackQuery#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.queryPackId">query_pack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#query_pack_id LogAnalyticsQueryPackQuery#query_pack_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.additionalSettingsJson">additional_settings_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#additional_settings_json LogAnalyticsQueryPackQuery#additional_settings_json}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.categories">categories</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#categories LogAnalyticsQueryPackQuery#categories}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#description LogAnalyticsQueryPackQuery#description}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#id LogAnalyticsQueryPackQuery#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#name LogAnalyticsQueryPackQuery#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#resource_types LogAnalyticsQueryPackQuery#resource_types}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.solutions">solutions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#solutions LogAnalyticsQueryPackQuery#solutions}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#tags LogAnalyticsQueryPackQuery#tags}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.body"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#body LogAnalyticsQueryPackQuery#body}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#display_name LogAnalyticsQueryPackQuery#display_name}.

---

##### `query_pack_id`<sup>Required</sup> <a name="query_pack_id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.queryPackId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#query_pack_id LogAnalyticsQueryPackQuery#query_pack_id}.

---

##### `additional_settings_json`<sup>Optional</sup> <a name="additional_settings_json" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.additionalSettingsJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#additional_settings_json LogAnalyticsQueryPackQuery#additional_settings_json}.

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.categories"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#categories LogAnalyticsQueryPackQuery#categories}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#description LogAnalyticsQueryPackQuery#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#id LogAnalyticsQueryPackQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#name LogAnalyticsQueryPackQuery#name}.

---

##### `resource_types`<sup>Optional</sup> <a name="resource_types" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.resourceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#resource_types LogAnalyticsQueryPackQuery#resource_types}.

---

##### `solutions`<sup>Optional</sup> <a name="solutions" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.solutions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#solutions LogAnalyticsQueryPackQuery#solutions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#tags LogAnalyticsQueryPackQuery#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#timeouts LogAnalyticsQueryPackQuery#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetAdditionalSettingsJson">reset_additional_settings_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetCategories">reset_categories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetResourceTypes">reset_resource_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetSolutions">reset_solutions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#create LogAnalyticsQueryPackQuery#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#delete LogAnalyticsQueryPackQuery#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#read LogAnalyticsQueryPackQuery#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#update LogAnalyticsQueryPackQuery#update}.

---

##### `reset_additional_settings_json` <a name="reset_additional_settings_json" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetAdditionalSettingsJson"></a>

```python
def reset_additional_settings_json() -> None
```

##### `reset_categories` <a name="reset_categories" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetCategories"></a>

```python
def reset_categories() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_resource_types` <a name="reset_resource_types" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetResourceTypes"></a>

```python
def reset_resource_types() -> None
```

##### `reset_solutions` <a name="reset_solutions" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetSolutions"></a>

```python
def reset_solutions() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LogAnalyticsQueryPackQuery resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_query_pack_query

logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_query_pack_query

logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_query_pack_query

logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_query_pack_query

logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LogAnalyticsQueryPackQuery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogAnalyticsQueryPackQuery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogAnalyticsQueryPackQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsQueryPackQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference">LogAnalyticsQueryPackQueryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.additionalSettingsJsonInput">additional_settings_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.bodyInput">body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.categoriesInput">categories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.queryPackIdInput">query_pack_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.solutionsInput">solutions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.additionalSettingsJson">additional_settings_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.categories">categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.queryPackId">query_pack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.solutions">solutions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.timeouts"></a>

```python
timeouts: LogAnalyticsQueryPackQueryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference">LogAnalyticsQueryPackQueryTimeoutsOutputReference</a>

---

##### `additional_settings_json_input`<sup>Optional</sup> <a name="additional_settings_json_input" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.additionalSettingsJsonInput"></a>

```python
additional_settings_json_input: str
```

- *Type:* str

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.bodyInput"></a>

```python
body_input: str
```

- *Type:* str

---

##### `categories_input`<sup>Optional</sup> <a name="categories_input" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.categoriesInput"></a>

```python
categories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_pack_id_input`<sup>Optional</sup> <a name="query_pack_id_input" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.queryPackIdInput"></a>

```python
query_pack_id_input: str
```

- *Type:* str

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `solutions_input`<sup>Optional</sup> <a name="solutions_input" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.solutionsInput"></a>

```python
solutions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LogAnalyticsQueryPackQueryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a>]

---

##### `additional_settings_json`<sup>Required</sup> <a name="additional_settings_json" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.additionalSettingsJson"></a>

```python
additional_settings_json: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.categories"></a>

```python
categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query_pack_id`<sup>Required</sup> <a name="query_pack_id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.queryPackId"></a>

```python
query_pack_id: str
```

- *Type:* str

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `solutions`<sup>Required</sup> <a name="solutions" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.solutions"></a>

```python
solutions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQuery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsQueryPackQueryConfig <a name="LogAnalyticsQueryPackQueryConfig" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_query_pack_query

logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  body: str,
  display_name: str,
  query_pack_id: str,
  additional_settings_json: str = None,
  categories: typing.List[str] = None,
  description: str = None,
  id: str = None,
  name: str = None,
  resource_types: typing.List[str] = None,
  solutions: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  timeouts: LogAnalyticsQueryPackQueryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.body">body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#body LogAnalyticsQueryPackQuery#body}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#display_name LogAnalyticsQueryPackQuery#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.queryPackId">query_pack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#query_pack_id LogAnalyticsQueryPackQuery#query_pack_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.additionalSettingsJson">additional_settings_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#additional_settings_json LogAnalyticsQueryPackQuery#additional_settings_json}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.categories">categories</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#categories LogAnalyticsQueryPackQuery#categories}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#description LogAnalyticsQueryPackQuery#description}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#id LogAnalyticsQueryPackQuery#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#name LogAnalyticsQueryPackQuery#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#resource_types LogAnalyticsQueryPackQuery#resource_types}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.solutions">solutions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#solutions LogAnalyticsQueryPackQuery#solutions}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#tags LogAnalyticsQueryPackQuery#tags}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.body"></a>

```python
body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#body LogAnalyticsQueryPackQuery#body}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#display_name LogAnalyticsQueryPackQuery#display_name}.

---

##### `query_pack_id`<sup>Required</sup> <a name="query_pack_id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.queryPackId"></a>

```python
query_pack_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#query_pack_id LogAnalyticsQueryPackQuery#query_pack_id}.

---

##### `additional_settings_json`<sup>Optional</sup> <a name="additional_settings_json" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.additionalSettingsJson"></a>

```python
additional_settings_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#additional_settings_json LogAnalyticsQueryPackQuery#additional_settings_json}.

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.categories"></a>

```python
categories: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#categories LogAnalyticsQueryPackQuery#categories}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#description LogAnalyticsQueryPackQuery#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#id LogAnalyticsQueryPackQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#name LogAnalyticsQueryPackQuery#name}.

---

##### `resource_types`<sup>Optional</sup> <a name="resource_types" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#resource_types LogAnalyticsQueryPackQuery#resource_types}.

---

##### `solutions`<sup>Optional</sup> <a name="solutions" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.solutions"></a>

```python
solutions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#solutions LogAnalyticsQueryPackQuery#solutions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#tags LogAnalyticsQueryPackQuery#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryConfig.property.timeouts"></a>

```python
timeouts: LogAnalyticsQueryPackQueryTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#timeouts LogAnalyticsQueryPackQuery#timeouts}

---

### LogAnalyticsQueryPackQueryTimeouts <a name="LogAnalyticsQueryPackQueryTimeouts" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_query_pack_query

logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#create LogAnalyticsQueryPackQuery#create}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#delete LogAnalyticsQueryPackQuery#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#read LogAnalyticsQueryPackQuery#read}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#update LogAnalyticsQueryPackQuery#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#create LogAnalyticsQueryPackQuery#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#delete LogAnalyticsQueryPackQuery#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#read LogAnalyticsQueryPackQuery#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/log_analytics_query_pack_query#update LogAnalyticsQueryPackQuery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsQueryPackQueryTimeoutsOutputReference <a name="LogAnalyticsQueryPackQueryTimeoutsOutputReference" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_query_pack_query

logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogAnalyticsQueryPackQueryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logAnalyticsQueryPackQuery.LogAnalyticsQueryPackQueryTimeouts">LogAnalyticsQueryPackQueryTimeouts</a>]

---



