# `azurerm_application_insights_analytics_item`

Refer to the Terraform Registory for docs: [`azurerm_application_insights_analytics_item`](https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item).

# `applicationInsightsAnalyticsItem` Submodule <a name="`applicationInsightsAnalyticsItem` Submodule" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsightsAnalyticsItem <a name="ApplicationInsightsAnalyticsItem" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item azurerm_application_insights_analytics_item}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_analytics_item

applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem(
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
  content: str,
  name: str,
  scope: str,
  type: str,
  function_alias: str = None,
  id: str = None,
  timeouts: ApplicationInsightsAnalyticsItemTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.applicationInsightsId">application_insights_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#application_insights_id ApplicationInsightsAnalyticsItem#application_insights_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#content ApplicationInsightsAnalyticsItem#content}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#name ApplicationInsightsAnalyticsItem#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#scope ApplicationInsightsAnalyticsItem#scope}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#type ApplicationInsightsAnalyticsItem#type}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.functionAlias">function_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#function_alias ApplicationInsightsAnalyticsItem#function_alias}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#id ApplicationInsightsAnalyticsItem#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts">ApplicationInsightsAnalyticsItemTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_insights_id`<sup>Required</sup> <a name="application_insights_id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.applicationInsightsId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#application_insights_id ApplicationInsightsAnalyticsItem#application_insights_id}.

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#content ApplicationInsightsAnalyticsItem#content}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#name ApplicationInsightsAnalyticsItem#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#scope ApplicationInsightsAnalyticsItem#scope}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#type ApplicationInsightsAnalyticsItem#type}.

---

##### `function_alias`<sup>Optional</sup> <a name="function_alias" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.functionAlias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#function_alias ApplicationInsightsAnalyticsItem#function_alias}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#id ApplicationInsightsAnalyticsItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts">ApplicationInsightsAnalyticsItemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#timeouts ApplicationInsightsAnalyticsItem#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetFunctionAlias">reset_function_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#create ApplicationInsightsAnalyticsItem#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#delete ApplicationInsightsAnalyticsItem#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#read ApplicationInsightsAnalyticsItem#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#update ApplicationInsightsAnalyticsItem#update}.

---

##### `reset_function_alias` <a name="reset_function_alias" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetFunctionAlias"></a>

```python
def reset_function_alias() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_analytics_item

applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_analytics_item

applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_analytics_item

applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeModified">time_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference">ApplicationInsightsAnalyticsItemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.applicationInsightsIdInput">application_insights_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.functionAliasInput">function_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts">ApplicationInsightsAnalyticsItemTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.applicationInsightsId">application_insights_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.functionAlias">function_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_modified`<sup>Required</sup> <a name="time_modified" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeModified"></a>

```python
time_modified: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeouts"></a>

```python
timeouts: ApplicationInsightsAnalyticsItemTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference">ApplicationInsightsAnalyticsItemTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `application_insights_id_input`<sup>Optional</sup> <a name="application_insights_id_input" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.applicationInsightsIdInput"></a>

```python
application_insights_id_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `function_alias_input`<sup>Optional</sup> <a name="function_alias_input" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.functionAliasInput"></a>

```python
function_alias_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApplicationInsightsAnalyticsItemTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts">ApplicationInsightsAnalyticsItemTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `application_insights_id`<sup>Required</sup> <a name="application_insights_id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.applicationInsightsId"></a>

```python
application_insights_id: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `function_alias`<sup>Required</sup> <a name="function_alias" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.functionAlias"></a>

```python
function_alias: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItem.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsAnalyticsItemConfig <a name="ApplicationInsightsAnalyticsItemConfig" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_analytics_item

applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_insights_id: str,
  content: str,
  name: str,
  scope: str,
  type: str,
  function_alias: str = None,
  id: str = None,
  timeouts: ApplicationInsightsAnalyticsItemTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.applicationInsightsId">application_insights_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#application_insights_id ApplicationInsightsAnalyticsItem#application_insights_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#content ApplicationInsightsAnalyticsItem#content}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#name ApplicationInsightsAnalyticsItem#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#scope ApplicationInsightsAnalyticsItem#scope}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#type ApplicationInsightsAnalyticsItem#type}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.functionAlias">function_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#function_alias ApplicationInsightsAnalyticsItem#function_alias}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#id ApplicationInsightsAnalyticsItem#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts">ApplicationInsightsAnalyticsItemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_insights_id`<sup>Required</sup> <a name="application_insights_id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.applicationInsightsId"></a>

```python
application_insights_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#application_insights_id ApplicationInsightsAnalyticsItem#application_insights_id}.

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#content ApplicationInsightsAnalyticsItem#content}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#name ApplicationInsightsAnalyticsItem#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#scope ApplicationInsightsAnalyticsItem#scope}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#type ApplicationInsightsAnalyticsItem#type}.

---

##### `function_alias`<sup>Optional</sup> <a name="function_alias" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.functionAlias"></a>

```python
function_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#function_alias ApplicationInsightsAnalyticsItem#function_alias}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#id ApplicationInsightsAnalyticsItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemConfig.property.timeouts"></a>

```python
timeouts: ApplicationInsightsAnalyticsItemTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts">ApplicationInsightsAnalyticsItemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#timeouts ApplicationInsightsAnalyticsItem#timeouts}

---

### ApplicationInsightsAnalyticsItemTimeouts <a name="ApplicationInsightsAnalyticsItemTimeouts" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_analytics_item

applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#create ApplicationInsightsAnalyticsItem#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#delete ApplicationInsightsAnalyticsItem#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#read ApplicationInsightsAnalyticsItem#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#update ApplicationInsightsAnalyticsItem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#create ApplicationInsightsAnalyticsItem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#delete ApplicationInsightsAnalyticsItem#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#read ApplicationInsightsAnalyticsItem#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/application_insights_analytics_item#update ApplicationInsightsAnalyticsItem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsAnalyticsItemTimeoutsOutputReference <a name="ApplicationInsightsAnalyticsItemTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_insights_analytics_item

applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts">ApplicationInsightsAnalyticsItemTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationInsightsAnalyticsItemTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.applicationInsightsAnalyticsItem.ApplicationInsightsAnalyticsItemTimeouts">ApplicationInsightsAnalyticsItemTimeouts</a>]

---



