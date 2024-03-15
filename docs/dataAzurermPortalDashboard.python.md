# `dataAzurermPortalDashboard` Submodule <a name="`dataAzurermPortalDashboard` Submodule" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPortalDashboard <a name="DataAzurermPortalDashboard" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard azurerm_portal_dashboard}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_portal_dashboard

dataAzurermPortalDashboard.DataAzurermPortalDashboard(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  resource_group_name: str,
  dashboard_properties: str = None,
  display_name: str = None,
  id: str = None,
  name: str = None,
  timeouts: DataAzurermPortalDashboardTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#resource_group_name DataAzurermPortalDashboard#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.dashboardProperties">dashboard_properties</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#dashboard_properties DataAzurermPortalDashboard#dashboard_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#display_name DataAzurermPortalDashboard#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#id DataAzurermPortalDashboard#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#name DataAzurermPortalDashboard#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeouts">DataAzurermPortalDashboardTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#resource_group_name DataAzurermPortalDashboard#resource_group_name}.

---

##### `dashboard_properties`<sup>Optional</sup> <a name="dashboard_properties" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.dashboardProperties"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#dashboard_properties DataAzurermPortalDashboard#dashboard_properties}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#display_name DataAzurermPortalDashboard#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#id DataAzurermPortalDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#name DataAzurermPortalDashboard#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeouts">DataAzurermPortalDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#timeouts DataAzurermPortalDashboard#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.resetDashboardProperties">reset_dashboard_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#read DataAzurermPortalDashboard#read}.

---

##### `reset_dashboard_properties` <a name="reset_dashboard_properties" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.resetDashboardProperties"></a>

```python
def reset_dashboard_properties() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermPortalDashboard resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_portal_dashboard

dataAzurermPortalDashboard.DataAzurermPortalDashboard.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_portal_dashboard

dataAzurermPortalDashboard.DataAzurermPortalDashboard.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_portal_dashboard

dataAzurermPortalDashboard.DataAzurermPortalDashboard.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_portal_dashboard

dataAzurermPortalDashboard.DataAzurermPortalDashboard.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermPortalDashboard resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermPortalDashboard to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermPortalDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPortalDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference">DataAzurermPortalDashboardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.dashboardPropertiesInput">dashboard_properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeouts">DataAzurermPortalDashboardTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.dashboardProperties">dashboard_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.timeouts"></a>

```python
timeouts: DataAzurermPortalDashboardTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference">DataAzurermPortalDashboardTimeoutsOutputReference</a>

---

##### `dashboard_properties_input`<sup>Optional</sup> <a name="dashboard_properties_input" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.dashboardPropertiesInput"></a>

```python
dashboard_properties_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermPortalDashboardTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeouts">DataAzurermPortalDashboardTimeouts</a>]

---

##### `dashboard_properties`<sup>Required</sup> <a name="dashboard_properties" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.dashboardProperties"></a>

```python
dashboard_properties: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboard.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPortalDashboardConfig <a name="DataAzurermPortalDashboardConfig" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_portal_dashboard

dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  resource_group_name: str,
  dashboard_properties: str = None,
  display_name: str = None,
  id: str = None,
  name: str = None,
  timeouts: DataAzurermPortalDashboardTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#resource_group_name DataAzurermPortalDashboard#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.dashboardProperties">dashboard_properties</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#dashboard_properties DataAzurermPortalDashboard#dashboard_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#display_name DataAzurermPortalDashboard#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#id DataAzurermPortalDashboard#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#name DataAzurermPortalDashboard#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeouts">DataAzurermPortalDashboardTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#resource_group_name DataAzurermPortalDashboard#resource_group_name}.

---

##### `dashboard_properties`<sup>Optional</sup> <a name="dashboard_properties" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.dashboardProperties"></a>

```python
dashboard_properties: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#dashboard_properties DataAzurermPortalDashboard#dashboard_properties}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#display_name DataAzurermPortalDashboard#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#id DataAzurermPortalDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#name DataAzurermPortalDashboard#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardConfig.property.timeouts"></a>

```python
timeouts: DataAzurermPortalDashboardTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeouts">DataAzurermPortalDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#timeouts DataAzurermPortalDashboard#timeouts}

---

### DataAzurermPortalDashboardTimeouts <a name="DataAzurermPortalDashboardTimeouts" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_portal_dashboard

dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#read DataAzurermPortalDashboard#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/portal_dashboard#read DataAzurermPortalDashboard#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPortalDashboardTimeoutsOutputReference <a name="DataAzurermPortalDashboardTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_portal_dashboard

dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeouts">DataAzurermPortalDashboardTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermPortalDashboardTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPortalDashboard.DataAzurermPortalDashboardTimeouts">DataAzurermPortalDashboardTimeouts</a>]

---



