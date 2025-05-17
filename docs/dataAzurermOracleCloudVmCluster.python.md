# `dataAzurermOracleCloudVmCluster` Submodule <a name="`dataAzurermOracleCloudVmCluster` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleCloudVmCluster <a name="DataAzurermOracleCloudVmCluster" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/oracle_cloud_vm_cluster azurerm_oracle_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_cloud_vm_cluster

dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster(
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
  timeouts: DataAzurermOracleCloudVmClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/oracle_cloud_vm_cluster#name DataAzurermOracleCloudVmCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/oracle_cloud_vm_cluster#resource_group_name DataAzurermOracleCloudVmCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/oracle_cloud_vm_cluster#id DataAzurermOracleCloudVmCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts">DataAzurermOracleCloudVmClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/oracle_cloud_vm_cluster#name DataAzurermOracleCloudVmCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/oracle_cloud_vm_cluster#resource_group_name DataAzurermOracleCloudVmCluster#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/oracle_cloud_vm_cluster#id DataAzurermOracleCloudVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts">DataAzurermOracleCloudVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/oracle_cloud_vm_cluster#timeouts DataAzurermOracleCloudVmCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/oracle_cloud_vm_cluster#read DataAzurermOracleCloudVmCluster#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermOracleCloudVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_cloud_vm_cluster

dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_cloud_vm_cluster

dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_cloud_vm_cluster

dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_cloud_vm_cluster

dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermOracleCloudVmCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermOracleCloudVmCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermOracleCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/oracle_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.backupSubnetCidr">backup_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.computeNodes">compute_nodes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList">DataAzurermOracleCloudVmClusterDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dataStoragePercentage">data_storage_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dbNodeStorageSizeInGbs">db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.diskRedundancy">disk_redundancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.giVersion">gi_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.hostnameActual">hostname_actual</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.iormConfigCache">iorm_config_cache</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList">DataAzurermOracleCloudVmClusterIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.lastUpdateHistoryEntryId">last_update_history_entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.localBackupEnabled">local_backup_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.memorySizeInGbs">memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.nsgUrl">nsg_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanDnsName">scan_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanDnsRecordId">scan_dns_record_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanIpIds">scan_ip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanListenerPortTcpSsl">scan_listener_port_tcp_ssl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.sparseDiskgroupEnabled">sparse_diskgroup_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.storageSizeInGbs">storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.subnetOcid">subnet_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.systemVersion">system_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference">DataAzurermOracleCloudVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.vipOds">vip_ods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts">DataAzurermOracleCloudVmClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `backup_subnet_cidr`<sup>Required</sup> <a name="backup_subnet_cidr" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.backupSubnetCidr"></a>

```python
backup_subnet_cidr: str
```

- *Type:* str

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_nodes`<sup>Required</sup> <a name="compute_nodes" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.computeNodes"></a>

```python
compute_nodes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_collection_options`<sup>Required</sup> <a name="data_collection_options" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dataCollectionOptions"></a>

```python
data_collection_options: DataAzurermOracleCloudVmClusterDataCollectionOptionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList">DataAzurermOracleCloudVmClusterDataCollectionOptionsList</a>

---

##### `data_storage_percentage`<sup>Required</sup> <a name="data_storage_percentage" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dataStoragePercentage"></a>

```python
data_storage_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_tbs`<sup>Required</sup> <a name="data_storage_size_in_tbs" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_in_gbs`<sup>Required</sup> <a name="db_node_storage_size_in_gbs" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dbNodeStorageSizeInGbs"></a>

```python
db_node_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_servers`<sup>Required</sup> <a name="db_servers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.dbServers"></a>

```python
db_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disk_redundancy`<sup>Required</sup> <a name="disk_redundancy" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.diskRedundancy"></a>

```python
disk_redundancy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `gi_version`<sup>Required</sup> <a name="gi_version" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.giVersion"></a>

```python
gi_version: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `hostname_actual`<sup>Required</sup> <a name="hostname_actual" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.hostnameActual"></a>

```python
hostname_actual: str
```

- *Type:* str

---

##### `iorm_config_cache`<sup>Required</sup> <a name="iorm_config_cache" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.iormConfigCache"></a>

```python
iorm_config_cache: DataAzurermOracleCloudVmClusterIormConfigCacheList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList">DataAzurermOracleCloudVmClusterIormConfigCacheList</a>

---

##### `last_update_history_entry_id`<sup>Required</sup> <a name="last_update_history_entry_id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.lastUpdateHistoryEntryId"></a>

```python
last_update_history_entry_id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_backup_enabled`<sup>Required</sup> <a name="local_backup_enabled" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.localBackupEnabled"></a>

```python
local_backup_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `memory_size_in_gbs`<sup>Required</sup> <a name="memory_size_in_gbs" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.memorySizeInGbs"></a>

```python
memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nsg_url`<sup>Required</sup> <a name="nsg_url" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.nsgUrl"></a>

```python
nsg_url: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `ocpu_count`<sup>Required</sup> <a name="ocpu_count" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.ocpuCount"></a>

```python
ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_dns_name`<sup>Required</sup> <a name="scan_dns_name" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanDnsName"></a>

```python
scan_dns_name: str
```

- *Type:* str

---

##### `scan_dns_record_id`<sup>Required</sup> <a name="scan_dns_record_id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanDnsRecordId"></a>

```python
scan_dns_record_id: str
```

- *Type:* str

---

##### `scan_ip_ids`<sup>Required</sup> <a name="scan_ip_ids" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanIpIds"></a>

```python
scan_ip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scan_listener_port_tcp`<sup>Required</sup> <a name="scan_listener_port_tcp" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp_ssl`<sup>Required</sup> <a name="scan_listener_port_tcp_ssl" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.scanListenerPortTcpSsl"></a>

```python
scan_listener_port_tcp_ssl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `sparse_diskgroup_enabled`<sup>Required</sup> <a name="sparse_diskgroup_enabled" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.sparseDiskgroupEnabled"></a>

```python
sparse_diskgroup_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_size_in_gbs`<sup>Required</sup> <a name="storage_size_in_gbs" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.storageSizeInGbs"></a>

```python
storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `subnet_ocid`<sup>Required</sup> <a name="subnet_ocid" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.subnetOcid"></a>

```python
subnet_ocid: str
```

- *Type:* str

---

##### `system_version`<sup>Required</sup> <a name="system_version" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.systemVersion"></a>

```python
system_version: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.timeouts"></a>

```python
timeouts: DataAzurermOracleCloudVmClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference">DataAzurermOracleCloudVmClusterTimeoutsOutputReference</a>

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `vip_ods`<sup>Required</sup> <a name="vip_ods" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.vipOds"></a>

```python
vip_ods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermOracleCloudVmClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts">DataAzurermOracleCloudVmClusterTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleCloudVmClusterConfig <a name="DataAzurermOracleCloudVmClusterConfig" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_cloud_vm_cluster

dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig(
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
  timeouts: DataAzurermOracleCloudVmClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/oracle_cloud_vm_cluster#name DataAzurermOracleCloudVmCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/oracle_cloud_vm_cluster#resource_group_name DataAzurermOracleCloudVmCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/oracle_cloud_vm_cluster#id DataAzurermOracleCloudVmCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts">DataAzurermOracleCloudVmClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/oracle_cloud_vm_cluster#name DataAzurermOracleCloudVmCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/oracle_cloud_vm_cluster#resource_group_name DataAzurermOracleCloudVmCluster#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/oracle_cloud_vm_cluster#id DataAzurermOracleCloudVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterConfig.property.timeouts"></a>

```python
timeouts: DataAzurermOracleCloudVmClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts">DataAzurermOracleCloudVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/oracle_cloud_vm_cluster#timeouts DataAzurermOracleCloudVmCluster#timeouts}

---

### DataAzurermOracleCloudVmClusterDataCollectionOptions <a name="DataAzurermOracleCloudVmClusterDataCollectionOptions" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_cloud_vm_cluster

dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptions()
```


### DataAzurermOracleCloudVmClusterIormConfigCache <a name="DataAzurermOracleCloudVmClusterIormConfigCache" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCache.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_cloud_vm_cluster

dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCache()
```


### DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans <a name="DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_cloud_vm_cluster

dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans()
```


### DataAzurermOracleCloudVmClusterTimeouts <a name="DataAzurermOracleCloudVmClusterTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_cloud_vm_cluster

dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/oracle_cloud_vm_cluster#read DataAzurermOracleCloudVmCluster#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/data-sources/oracle_cloud_vm_cluster#read DataAzurermOracleCloudVmCluster#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleCloudVmClusterDataCollectionOptionsList <a name="DataAzurermOracleCloudVmClusterDataCollectionOptionsList" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_cloud_vm_cluster

dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference <a name="DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_cloud_vm_cluster

dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled">diagnostics_events_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.healthMonitoringEnabled">health_monitoring_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.incidentLogsEnabled">incident_logs_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptions">DataAzurermOracleCloudVmClusterDataCollectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `diagnostics_events_enabled`<sup>Required</sup> <a name="diagnostics_events_enabled" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled"></a>

```python
diagnostics_events_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `health_monitoring_enabled`<sup>Required</sup> <a name="health_monitoring_enabled" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.healthMonitoringEnabled"></a>

```python
health_monitoring_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `incident_logs_enabled`<sup>Required</sup> <a name="incident_logs_enabled" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.incidentLogsEnabled"></a>

```python
incident_logs_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermOracleCloudVmClusterDataCollectionOptions
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterDataCollectionOptions">DataAzurermOracleCloudVmClusterDataCollectionOptions</a>

---


### DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList <a name="DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_cloud_vm_cluster

dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference <a name="DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_cloud_vm_cluster

dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">flash_cache_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.share">share</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans">DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `flash_cache_limit`<sup>Required</sup> <a name="flash_cache_limit" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```python
flash_cache_limit: str
```

- *Type:* str

---

##### `share`<sup>Required</sup> <a name="share" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.share"></a>

```python
share: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans">DataAzurermOracleCloudVmClusterIormConfigCacheDbPlans</a>

---


### DataAzurermOracleCloudVmClusterIormConfigCacheList <a name="DataAzurermOracleCloudVmClusterIormConfigCacheList" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_cloud_vm_cluster

dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference <a name="DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_cloud_vm_cluster

dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.dbPlans">db_plans</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList">DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.objective">objective</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCache">DataAzurermOracleCloudVmClusterIormConfigCache</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_plans`<sup>Required</sup> <a name="db_plans" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.dbPlans"></a>

```python
db_plans: DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList">DataAzurermOracleCloudVmClusterIormConfigCacheDbPlansList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `objective`<sup>Required</sup> <a name="objective" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.objective"></a>

```python
objective: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCacheOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermOracleCloudVmClusterIormConfigCache
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterIormConfigCache">DataAzurermOracleCloudVmClusterIormConfigCache</a>

---


### DataAzurermOracleCloudVmClusterTimeoutsOutputReference <a name="DataAzurermOracleCloudVmClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_oracle_cloud_vm_cluster

dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts">DataAzurermOracleCloudVmClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermOracleCloudVmClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOracleCloudVmCluster.DataAzurermOracleCloudVmClusterTimeouts">DataAzurermOracleCloudVmClusterTimeouts</a>]

---



