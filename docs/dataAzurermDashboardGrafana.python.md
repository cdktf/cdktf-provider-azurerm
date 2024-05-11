# `dataAzurermDashboardGrafana` Submodule <a name="`dataAzurermDashboardGrafana` Submodule" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDashboardGrafana <a name="DataAzurermDashboardGrafana" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana azurerm_dashboard_grafana}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dashboard_grafana

dataAzurermDashboardGrafana.DataAzurermDashboardGrafana(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  identity: DataAzurermDashboardGrafanaIdentity = None,
  timeouts: DataAzurermDashboardGrafanaTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#name DataAzurermDashboardGrafana#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#resource_group_name DataAzurermDashboardGrafana#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#id DataAzurermDashboardGrafana#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentity">DataAzurermDashboardGrafanaIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeouts">DataAzurermDashboardGrafanaTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#name DataAzurermDashboardGrafana#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#resource_group_name DataAzurermDashboardGrafana#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#id DataAzurermDashboardGrafana#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentity">DataAzurermDashboardGrafanaIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#identity DataAzurermDashboardGrafana#identity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeouts">DataAzurermDashboardGrafanaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#timeouts DataAzurermDashboardGrafana#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#type DataAzurermDashboardGrafana#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#identity_ids DataAzurermDashboardGrafana#identity_ids}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#read DataAzurermDashboardGrafana#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermDashboardGrafana resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dashboard_grafana

dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dashboard_grafana

dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dashboard_grafana

dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dashboard_grafana

dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermDashboardGrafana resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermDashboardGrafana to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermDashboardGrafana that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermDashboardGrafana to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.apiKeyEnabled">api_key_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.autoGeneratedDomainNameLabelScope">auto_generated_domain_name_label_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.azureMonitorWorkspaceIntegrations">azure_monitor_workspace_integrations</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList">DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.deterministicOutboundIpEnabled">deterministic_outbound_ip_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.grafanaMajorVersion">grafana_major_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.grafanaVersion">grafana_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference">DataAzurermDashboardGrafanaIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.outboundIps">outbound_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference">DataAzurermDashboardGrafanaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.zoneRedundancyEnabled">zone_redundancy_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentity">DataAzurermDashboardGrafanaIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeouts">DataAzurermDashboardGrafanaTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `api_key_enabled`<sup>Required</sup> <a name="api_key_enabled" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.apiKeyEnabled"></a>

```python
api_key_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_generated_domain_name_label_scope`<sup>Required</sup> <a name="auto_generated_domain_name_label_scope" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.autoGeneratedDomainNameLabelScope"></a>

```python
auto_generated_domain_name_label_scope: str
```

- *Type:* str

---

##### `azure_monitor_workspace_integrations`<sup>Required</sup> <a name="azure_monitor_workspace_integrations" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.azureMonitorWorkspaceIntegrations"></a>

```python
azure_monitor_workspace_integrations: DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList">DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList</a>

---

##### `deterministic_outbound_ip_enabled`<sup>Required</sup> <a name="deterministic_outbound_ip_enabled" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.deterministicOutboundIpEnabled"></a>

```python
deterministic_outbound_ip_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `grafana_major_version`<sup>Required</sup> <a name="grafana_major_version" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.grafanaMajorVersion"></a>

```python
grafana_major_version: str
```

- *Type:* str

---

##### `grafana_version`<sup>Required</sup> <a name="grafana_version" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.grafanaVersion"></a>

```python
grafana_version: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.identity"></a>

```python
identity: DataAzurermDashboardGrafanaIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference">DataAzurermDashboardGrafanaIdentityOutputReference</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `outbound_ips`<sup>Required</sup> <a name="outbound_ips" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.outboundIps"></a>

```python
outbound_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.timeouts"></a>

```python
timeouts: DataAzurermDashboardGrafanaTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference">DataAzurermDashboardGrafanaTimeoutsOutputReference</a>

---

##### `zone_redundancy_enabled`<sup>Required</sup> <a name="zone_redundancy_enabled" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.zoneRedundancyEnabled"></a>

```python
zone_redundancy_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.identityInput"></a>

```python
identity_input: DataAzurermDashboardGrafanaIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentity">DataAzurermDashboardGrafanaIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermDashboardGrafanaTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeouts">DataAzurermDashboardGrafanaTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafana.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrations <a name="DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrations" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrations.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dashboard_grafana

dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrations()
```


### DataAzurermDashboardGrafanaConfig <a name="DataAzurermDashboardGrafanaConfig" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dashboard_grafana

dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  identity: DataAzurermDashboardGrafanaIdentity = None,
  timeouts: DataAzurermDashboardGrafanaTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#name DataAzurermDashboardGrafana#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#resource_group_name DataAzurermDashboardGrafana#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#id DataAzurermDashboardGrafana#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentity">DataAzurermDashboardGrafanaIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeouts">DataAzurermDashboardGrafanaTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#name DataAzurermDashboardGrafana#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#resource_group_name DataAzurermDashboardGrafana#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#id DataAzurermDashboardGrafana#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.identity"></a>

```python
identity: DataAzurermDashboardGrafanaIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentity">DataAzurermDashboardGrafanaIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#identity DataAzurermDashboardGrafana#identity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaConfig.property.timeouts"></a>

```python
timeouts: DataAzurermDashboardGrafanaTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeouts">DataAzurermDashboardGrafanaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#timeouts DataAzurermDashboardGrafana#timeouts}

---

### DataAzurermDashboardGrafanaIdentity <a name="DataAzurermDashboardGrafanaIdentity" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dashboard_grafana

dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#type DataAzurermDashboardGrafana#type}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#identity_ids DataAzurermDashboardGrafana#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#type DataAzurermDashboardGrafana#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#identity_ids DataAzurermDashboardGrafana#identity_ids}.

---

### DataAzurermDashboardGrafanaTimeouts <a name="DataAzurermDashboardGrafanaTimeouts" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dashboard_grafana

dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#read DataAzurermDashboardGrafana#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/dashboard_grafana#read DataAzurermDashboardGrafana#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList <a name="DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dashboard_grafana

dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference <a name="DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dashboard_grafana

dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrations">DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrations
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrations">DataAzurermDashboardGrafanaAzureMonitorWorkspaceIntegrations</a>

---


### DataAzurermDashboardGrafanaIdentityOutputReference <a name="DataAzurermDashboardGrafanaIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dashboard_grafana

dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentity">DataAzurermDashboardGrafanaIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermDashboardGrafanaIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaIdentity">DataAzurermDashboardGrafanaIdentity</a>

---


### DataAzurermDashboardGrafanaTimeoutsOutputReference <a name="DataAzurermDashboardGrafanaTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_dashboard_grafana

dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeouts">DataAzurermDashboardGrafanaTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermDashboardGrafanaTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermDashboardGrafana.DataAzurermDashboardGrafanaTimeouts">DataAzurermDashboardGrafanaTimeouts</a>]

---



