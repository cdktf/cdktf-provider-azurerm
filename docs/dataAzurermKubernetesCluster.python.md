# `data_azurerm_kubernetes_cluster`

Refer to the Terraform Registory for docs: [`data_azurerm_kubernetes_cluster`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/kubernetes_cluster).

# `dataAzurermKubernetesCluster` Submodule <a name="`dataAzurermKubernetesCluster` Submodule" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKubernetesCluster <a name="DataAzurermKubernetesCluster" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/kubernetes_cluster azurerm_kubernetes_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesCluster(
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
  timeouts: DataAzurermKubernetesClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/kubernetes_cluster#name DataAzurermKubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/kubernetes_cluster#resource_group_name DataAzurermKubernetesCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/kubernetes_cluster#id DataAzurermKubernetesCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts">DataAzurermKubernetesClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/kubernetes_cluster#name DataAzurermKubernetesCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/kubernetes_cluster#resource_group_name DataAzurermKubernetesCluster#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/kubernetes_cluster#id DataAzurermKubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts">DataAzurermKubernetesClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/kubernetes_cluster#timeouts DataAzurermKubernetesCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/kubernetes_cluster#read DataAzurermKubernetesCluster#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.aciConnectorLinux">aci_connector_linux</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList">DataAzurermKubernetesClusterAciConnectorLinuxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.agentPoolProfile">agent_pool_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList">DataAzurermKubernetesClusterAgentPoolProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.apiServerAuthorizedIpRanges">api_server_authorized_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.azureActiveDirectoryRoleBasedAccessControl">azure_active_directory_role_based_access_control</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList">DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.azurePolicyEnabled">azure_policy_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.diskEncryptionSetId">disk_encryption_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.dnsPrefix">dns_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.httpApplicationRoutingEnabled">http_application_routing_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.httpApplicationRoutingZoneName">http_application_routing_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList">DataAzurermKubernetesClusterIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.ingressApplicationGateway">ingress_application_gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList">DataAzurermKubernetesClusterIngressApplicationGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.keyManagementService">key_management_service</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList">DataAzurermKubernetesClusterKeyManagementServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.keyVaultSecretsProvider">key_vault_secrets_provider</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList">DataAzurermKubernetesClusterKeyVaultSecretsProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeAdminConfig">kube_admin_config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList">DataAzurermKubernetesClusterKubeAdminConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeAdminConfigRaw">kube_admin_config_raw</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeConfig">kube_config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList">DataAzurermKubernetesClusterKubeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeConfigRaw">kube_config_raw</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeletIdentity">kubelet_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList">DataAzurermKubernetesClusterKubeletIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.linuxProfile">linux_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList">DataAzurermKubernetesClusterLinuxProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.microsoftDefender">microsoft_defender</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList">DataAzurermKubernetesClusterMicrosoftDefenderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.networkProfile">network_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList">DataAzurermKubernetesClusterNetworkProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.nodeResourceGroup">node_resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.nodeResourceGroupId">node_resource_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.oidcIssuerEnabled">oidc_issuer_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.oidcIssuerUrl">oidc_issuer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.omsAgent">oms_agent</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList">DataAzurermKubernetesClusterOmsAgentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.openServiceMeshEnabled">open_service_mesh_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.privateClusterEnabled">private_cluster_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.privateFqdn">private_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.roleBasedAccessControlEnabled">role_based_access_control_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.servicePrincipal">service_principal</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList">DataAzurermKubernetesClusterServicePrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.storageProfile">storage_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList">DataAzurermKubernetesClusterStorageProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference">DataAzurermKubernetesClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.windowsProfile">windows_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList">DataAzurermKubernetesClusterWindowsProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts">DataAzurermKubernetesClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `aci_connector_linux`<sup>Required</sup> <a name="aci_connector_linux" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.aciConnectorLinux"></a>

```python
aci_connector_linux: DataAzurermKubernetesClusterAciConnectorLinuxList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList">DataAzurermKubernetesClusterAciConnectorLinuxList</a>

---

##### `agent_pool_profile`<sup>Required</sup> <a name="agent_pool_profile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.agentPoolProfile"></a>

```python
agent_pool_profile: DataAzurermKubernetesClusterAgentPoolProfileList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList">DataAzurermKubernetesClusterAgentPoolProfileList</a>

---

##### `api_server_authorized_ip_ranges`<sup>Required</sup> <a name="api_server_authorized_ip_ranges" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.apiServerAuthorizedIpRanges"></a>

```python
api_server_authorized_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `azure_active_directory_role_based_access_control`<sup>Required</sup> <a name="azure_active_directory_role_based_access_control" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.azureActiveDirectoryRoleBasedAccessControl"></a>

```python
azure_active_directory_role_based_access_control: DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList">DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList</a>

---

##### `azure_policy_enabled`<sup>Required</sup> <a name="azure_policy_enabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.azurePolicyEnabled"></a>

```python
azure_policy_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `disk_encryption_set_id`<sup>Required</sup> <a name="disk_encryption_set_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.diskEncryptionSetId"></a>

```python
disk_encryption_set_id: str
```

- *Type:* str

---

##### `dns_prefix`<sup>Required</sup> <a name="dns_prefix" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.dnsPrefix"></a>

```python
dns_prefix: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `http_application_routing_enabled`<sup>Required</sup> <a name="http_application_routing_enabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.httpApplicationRoutingEnabled"></a>

```python
http_application_routing_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `http_application_routing_zone_name`<sup>Required</sup> <a name="http_application_routing_zone_name" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.httpApplicationRoutingZoneName"></a>

```python
http_application_routing_zone_name: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.identity"></a>

```python
identity: DataAzurermKubernetesClusterIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList">DataAzurermKubernetesClusterIdentityList</a>

---

##### `ingress_application_gateway`<sup>Required</sup> <a name="ingress_application_gateway" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.ingressApplicationGateway"></a>

```python
ingress_application_gateway: DataAzurermKubernetesClusterIngressApplicationGatewayList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList">DataAzurermKubernetesClusterIngressApplicationGatewayList</a>

---

##### `key_management_service`<sup>Required</sup> <a name="key_management_service" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.keyManagementService"></a>

```python
key_management_service: DataAzurermKubernetesClusterKeyManagementServiceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList">DataAzurermKubernetesClusterKeyManagementServiceList</a>

---

##### `key_vault_secrets_provider`<sup>Required</sup> <a name="key_vault_secrets_provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.keyVaultSecretsProvider"></a>

```python
key_vault_secrets_provider: DataAzurermKubernetesClusterKeyVaultSecretsProviderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList">DataAzurermKubernetesClusterKeyVaultSecretsProviderList</a>

---

##### `kube_admin_config`<sup>Required</sup> <a name="kube_admin_config" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeAdminConfig"></a>

```python
kube_admin_config: DataAzurermKubernetesClusterKubeAdminConfigList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList">DataAzurermKubernetesClusterKubeAdminConfigList</a>

---

##### `kube_admin_config_raw`<sup>Required</sup> <a name="kube_admin_config_raw" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeAdminConfigRaw"></a>

```python
kube_admin_config_raw: str
```

- *Type:* str

---

##### `kube_config`<sup>Required</sup> <a name="kube_config" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeConfig"></a>

```python
kube_config: DataAzurermKubernetesClusterKubeConfigList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList">DataAzurermKubernetesClusterKubeConfigList</a>

---

##### `kube_config_raw`<sup>Required</sup> <a name="kube_config_raw" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeConfigRaw"></a>

```python
kube_config_raw: str
```

- *Type:* str

---

##### `kubelet_identity`<sup>Required</sup> <a name="kubelet_identity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeletIdentity"></a>

```python
kubelet_identity: DataAzurermKubernetesClusterKubeletIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList">DataAzurermKubernetesClusterKubeletIdentityList</a>

---

##### `kubernetes_version`<sup>Required</sup> <a name="kubernetes_version" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubernetesVersion"></a>

```python
kubernetes_version: str
```

- *Type:* str

---

##### `linux_profile`<sup>Required</sup> <a name="linux_profile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.linuxProfile"></a>

```python
linux_profile: DataAzurermKubernetesClusterLinuxProfileList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList">DataAzurermKubernetesClusterLinuxProfileList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `microsoft_defender`<sup>Required</sup> <a name="microsoft_defender" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.microsoftDefender"></a>

```python
microsoft_defender: DataAzurermKubernetesClusterMicrosoftDefenderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList">DataAzurermKubernetesClusterMicrosoftDefenderList</a>

---

##### `network_profile`<sup>Required</sup> <a name="network_profile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.networkProfile"></a>

```python
network_profile: DataAzurermKubernetesClusterNetworkProfileList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList">DataAzurermKubernetesClusterNetworkProfileList</a>

---

##### `node_resource_group`<sup>Required</sup> <a name="node_resource_group" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.nodeResourceGroup"></a>

```python
node_resource_group: str
```

- *Type:* str

---

##### `node_resource_group_id`<sup>Required</sup> <a name="node_resource_group_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.nodeResourceGroupId"></a>

```python
node_resource_group_id: str
```

- *Type:* str

---

##### `oidc_issuer_enabled`<sup>Required</sup> <a name="oidc_issuer_enabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.oidcIssuerEnabled"></a>

```python
oidc_issuer_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `oidc_issuer_url`<sup>Required</sup> <a name="oidc_issuer_url" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.oidcIssuerUrl"></a>

```python
oidc_issuer_url: str
```

- *Type:* str

---

##### `oms_agent`<sup>Required</sup> <a name="oms_agent" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.omsAgent"></a>

```python
oms_agent: DataAzurermKubernetesClusterOmsAgentList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList">DataAzurermKubernetesClusterOmsAgentList</a>

---

##### `open_service_mesh_enabled`<sup>Required</sup> <a name="open_service_mesh_enabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.openServiceMeshEnabled"></a>

```python
open_service_mesh_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `private_cluster_enabled`<sup>Required</sup> <a name="private_cluster_enabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.privateClusterEnabled"></a>

```python
private_cluster_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `private_fqdn`<sup>Required</sup> <a name="private_fqdn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.privateFqdn"></a>

```python
private_fqdn: str
```

- *Type:* str

---

##### `role_based_access_control_enabled`<sup>Required</sup> <a name="role_based_access_control_enabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.roleBasedAccessControlEnabled"></a>

```python
role_based_access_control_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `service_principal`<sup>Required</sup> <a name="service_principal" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.servicePrincipal"></a>

```python
service_principal: DataAzurermKubernetesClusterServicePrincipalList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList">DataAzurermKubernetesClusterServicePrincipalList</a>

---

##### `storage_profile`<sup>Required</sup> <a name="storage_profile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.storageProfile"></a>

```python
storage_profile: DataAzurermKubernetesClusterStorageProfileList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList">DataAzurermKubernetesClusterStorageProfileList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.timeouts"></a>

```python
timeouts: DataAzurermKubernetesClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference">DataAzurermKubernetesClusterTimeoutsOutputReference</a>

---

##### `windows_profile`<sup>Required</sup> <a name="windows_profile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.windowsProfile"></a>

```python
windows_profile: DataAzurermKubernetesClusterWindowsProfileList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList">DataAzurermKubernetesClusterWindowsProfileList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAzurermKubernetesClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts">DataAzurermKubernetesClusterTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKubernetesClusterAciConnectorLinux <a name="DataAzurermKubernetesClusterAciConnectorLinux" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinux"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinux.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinux()
```


### DataAzurermKubernetesClusterAgentPoolProfile <a name="DataAzurermKubernetesClusterAgentPoolProfile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfile()
```


### DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings <a name="DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings()
```


### DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl <a name="DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl()
```


### DataAzurermKubernetesClusterConfig <a name="DataAzurermKubernetesClusterConfig" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig(
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
  timeouts: DataAzurermKubernetesClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/kubernetes_cluster#name DataAzurermKubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/kubernetes_cluster#resource_group_name DataAzurermKubernetesCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/kubernetes_cluster#id DataAzurermKubernetesCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts">DataAzurermKubernetesClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/kubernetes_cluster#name DataAzurermKubernetesCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/kubernetes_cluster#resource_group_name DataAzurermKubernetesCluster#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/kubernetes_cluster#id DataAzurermKubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.timeouts"></a>

```python
timeouts: DataAzurermKubernetesClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts">DataAzurermKubernetesClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/kubernetes_cluster#timeouts DataAzurermKubernetesCluster#timeouts}

---

### DataAzurermKubernetesClusterIdentity <a name="DataAzurermKubernetesClusterIdentity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentity()
```


### DataAzurermKubernetesClusterIngressApplicationGateway <a name="DataAzurermKubernetesClusterIngressApplicationGateway" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGateway()
```


### DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity <a name="DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity()
```


### DataAzurermKubernetesClusterKeyManagementService <a name="DataAzurermKubernetesClusterKeyManagementService" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementService.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementService()
```


### DataAzurermKubernetesClusterKeyVaultSecretsProvider <a name="DataAzurermKubernetesClusterKeyVaultSecretsProvider" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProvider()
```


### DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity <a name="DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity()
```


### DataAzurermKubernetesClusterKubeAdminConfig <a name="DataAzurermKubernetesClusterKubeAdminConfig" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfig()
```


### DataAzurermKubernetesClusterKubeConfig <a name="DataAzurermKubernetesClusterKubeConfig" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfig()
```


### DataAzurermKubernetesClusterKubeletIdentity <a name="DataAzurermKubernetesClusterKubeletIdentity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentity()
```


### DataAzurermKubernetesClusterLinuxProfile <a name="DataAzurermKubernetesClusterLinuxProfile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfile()
```


### DataAzurermKubernetesClusterLinuxProfileSshKey <a name="DataAzurermKubernetesClusterLinuxProfileSshKey" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKey()
```


### DataAzurermKubernetesClusterMicrosoftDefender <a name="DataAzurermKubernetesClusterMicrosoftDefender" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefender.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefender()
```


### DataAzurermKubernetesClusterNetworkProfile <a name="DataAzurermKubernetesClusterNetworkProfile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfile()
```


### DataAzurermKubernetesClusterOmsAgent <a name="DataAzurermKubernetesClusterOmsAgent" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgent.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgent()
```


### DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity <a name="DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity()
```


### DataAzurermKubernetesClusterServicePrincipal <a name="DataAzurermKubernetesClusterServicePrincipal" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipal.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipal()
```


### DataAzurermKubernetesClusterStorageProfile <a name="DataAzurermKubernetesClusterStorageProfile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfile()
```


### DataAzurermKubernetesClusterTimeouts <a name="DataAzurermKubernetesClusterTimeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/kubernetes_cluster#read DataAzurermKubernetesCluster#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/kubernetes_cluster#read DataAzurermKubernetesCluster#read}.

---

### DataAzurermKubernetesClusterWindowsProfile <a name="DataAzurermKubernetesClusterWindowsProfile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfile()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKubernetesClusterAciConnectorLinuxList <a name="DataAzurermKubernetesClusterAciConnectorLinuxList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterAciConnectorLinuxOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterAciConnectorLinuxOutputReference <a name="DataAzurermKubernetesClusterAciConnectorLinuxOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.property.subnetName">subnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinux">DataAzurermKubernetesClusterAciConnectorLinux</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_name`<sup>Required</sup> <a name="subnet_name" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.property.subnetName"></a>

```python
subnet_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterAciConnectorLinux
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinux">DataAzurermKubernetesClusterAciConnectorLinux</a>

---


### DataAzurermKubernetesClusterAgentPoolProfileList <a name="DataAzurermKubernetesClusterAgentPoolProfileList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterAgentPoolProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterAgentPoolProfileOutputReference <a name="DataAzurermKubernetesClusterAgentPoolProfileOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.enableAutoScaling">enable_auto_scaling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.enableNodePublicIp">enable_node_public_ip</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.maxCount">max_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.maxPods">max_pods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.minCount">min_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.nodeLabels">node_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.nodePublicIpPrefixId">node_public_ip_prefix_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.nodeTaints">node_taints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.orchestratorVersion">orchestrator_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.osDiskSizeGb">os_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.upgradeSettings">upgrade_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList">DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.vnetSubnetId">vnet_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfile">DataAzurermKubernetesClusterAgentPoolProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_auto_scaling`<sup>Required</sup> <a name="enable_auto_scaling" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.enableAutoScaling"></a>

```python
enable_auto_scaling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_node_public_ip`<sup>Required</sup> <a name="enable_node_public_ip" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.enableNodePublicIp"></a>

```python
enable_node_public_ip: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_count`<sup>Required</sup> <a name="max_count" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.maxCount"></a>

```python
max_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pods`<sup>Required</sup> <a name="max_pods" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.maxPods"></a>

```python
max_pods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_count`<sup>Required</sup> <a name="min_count" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.minCount"></a>

```python
min_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_labels`<sup>Required</sup> <a name="node_labels" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.nodeLabels"></a>

```python
node_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `node_public_ip_prefix_id`<sup>Required</sup> <a name="node_public_ip_prefix_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.nodePublicIpPrefixId"></a>

```python
node_public_ip_prefix_id: str
```

- *Type:* str

---

##### `node_taints`<sup>Required</sup> <a name="node_taints" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.nodeTaints"></a>

```python
node_taints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `orchestrator_version`<sup>Required</sup> <a name="orchestrator_version" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.orchestratorVersion"></a>

```python
orchestrator_version: str
```

- *Type:* str

---

##### `os_disk_size_gb`<sup>Required</sup> <a name="os_disk_size_gb" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.osDiskSizeGb"></a>

```python
os_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `upgrade_settings`<sup>Required</sup> <a name="upgrade_settings" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.upgradeSettings"></a>

```python
upgrade_settings: DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList">DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList</a>

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `vnet_subnet_id`<sup>Required</sup> <a name="vnet_subnet_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.vnetSubnetId"></a>

```python
vnet_subnet_id: str
```

- *Type:* str

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterAgentPoolProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfile">DataAzurermKubernetesClusterAgentPoolProfile</a>

---


### DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList <a name="DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference <a name="DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.property.maxSurge">max_surge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings">DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_surge`<sup>Required</sup> <a name="max_surge" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.property.maxSurge"></a>

```python
max_surge: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings">DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings</a>

---


### DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList <a name="DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference <a name="DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.adminGroupObjectIds">admin_group_object_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.azureRbacEnabled">azure_rbac_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.clientAppId">client_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.managed">managed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.serverAppId">server_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl">DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_group_object_ids`<sup>Required</sup> <a name="admin_group_object_ids" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.adminGroupObjectIds"></a>

```python
admin_group_object_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `azure_rbac_enabled`<sup>Required</sup> <a name="azure_rbac_enabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.azureRbacEnabled"></a>

```python
azure_rbac_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `client_app_id`<sup>Required</sup> <a name="client_app_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.clientAppId"></a>

```python
client_app_id: str
```

- *Type:* str

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.managed"></a>

```python
managed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `server_app_id`<sup>Required</sup> <a name="server_app_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.serverAppId"></a>

```python
server_app_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl">DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl</a>

---


### DataAzurermKubernetesClusterIdentityList <a name="DataAzurermKubernetesClusterIdentityList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterIdentityOutputReference <a name="DataAzurermKubernetesClusterIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentity">DataAzurermKubernetesClusterIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentity">DataAzurermKubernetesClusterIdentity</a>

---


### DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList <a name="DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference <a name="DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity">DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity">DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity</a>

---


### DataAzurermKubernetesClusterIngressApplicationGatewayList <a name="DataAzurermKubernetesClusterIngressApplicationGatewayList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference <a name="DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.effectiveGatewayId">effective_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.gatewayName">gateway_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.ingressApplicationGatewayIdentity">ingress_application_gateway_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList">DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.subnetCidr">subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGateway">DataAzurermKubernetesClusterIngressApplicationGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_gateway_id`<sup>Required</sup> <a name="effective_gateway_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.effectiveGatewayId"></a>

```python
effective_gateway_id: str
```

- *Type:* str

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `gateway_name`<sup>Required</sup> <a name="gateway_name" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.gatewayName"></a>

```python
gateway_name: str
```

- *Type:* str

---

##### `ingress_application_gateway_identity`<sup>Required</sup> <a name="ingress_application_gateway_identity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.ingressApplicationGatewayIdentity"></a>

```python
ingress_application_gateway_identity: DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList">DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList</a>

---

##### `subnet_cidr`<sup>Required</sup> <a name="subnet_cidr" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.subnetCidr"></a>

```python
subnet_cidr: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterIngressApplicationGateway
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGateway">DataAzurermKubernetesClusterIngressApplicationGateway</a>

---


### DataAzurermKubernetesClusterKeyManagementServiceList <a name="DataAzurermKubernetesClusterKeyManagementServiceList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterKeyManagementServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterKeyManagementServiceOutputReference <a name="DataAzurermKubernetesClusterKeyManagementServiceOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.keyVaultNetworkAccess">key_vault_network_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementService">DataAzurermKubernetesClusterKeyManagementService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

---

##### `key_vault_network_access`<sup>Required</sup> <a name="key_vault_network_access" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.keyVaultNetworkAccess"></a>

```python
key_vault_network_access: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterKeyManagementService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementService">DataAzurermKubernetesClusterKeyManagementService</a>

---


### DataAzurermKubernetesClusterKeyVaultSecretsProviderList <a name="DataAzurermKubernetesClusterKeyVaultSecretsProviderList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference <a name="DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.secretIdentity">secret_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList">DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.secretRotationEnabled">secret_rotation_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.secretRotationInterval">secret_rotation_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProvider">DataAzurermKubernetesClusterKeyVaultSecretsProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_identity`<sup>Required</sup> <a name="secret_identity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.secretIdentity"></a>

```python
secret_identity: DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList">DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList</a>

---

##### `secret_rotation_enabled`<sup>Required</sup> <a name="secret_rotation_enabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.secretRotationEnabled"></a>

```python
secret_rotation_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `secret_rotation_interval`<sup>Required</sup> <a name="secret_rotation_interval" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.secretRotationInterval"></a>

```python
secret_rotation_interval: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterKeyVaultSecretsProvider
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProvider">DataAzurermKubernetesClusterKeyVaultSecretsProvider</a>

---


### DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList <a name="DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference <a name="DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity">DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity">DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity</a>

---


### DataAzurermKubernetesClusterKubeAdminConfigList <a name="DataAzurermKubernetesClusterKubeAdminConfigList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterKubeAdminConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterKubeAdminConfigOutputReference <a name="DataAzurermKubernetesClusterKubeAdminConfigOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.clusterCaCertificate">cluster_ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfig">DataAzurermKubernetesClusterKubeAdminConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `cluster_ca_certificate`<sup>Required</sup> <a name="cluster_ca_certificate" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.clusterCaCertificate"></a>

```python
cluster_ca_certificate: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterKubeAdminConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfig">DataAzurermKubernetesClusterKubeAdminConfig</a>

---


### DataAzurermKubernetesClusterKubeConfigList <a name="DataAzurermKubernetesClusterKubeConfigList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterKubeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterKubeConfigOutputReference <a name="DataAzurermKubernetesClusterKubeConfigOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.clusterCaCertificate">cluster_ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfig">DataAzurermKubernetesClusterKubeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `cluster_ca_certificate`<sup>Required</sup> <a name="cluster_ca_certificate" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.clusterCaCertificate"></a>

```python
cluster_ca_certificate: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterKubeConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfig">DataAzurermKubernetesClusterKubeConfig</a>

---


### DataAzurermKubernetesClusterKubeletIdentityList <a name="DataAzurermKubernetesClusterKubeletIdentityList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterKubeletIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterKubeletIdentityOutputReference <a name="DataAzurermKubernetesClusterKubeletIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentity">DataAzurermKubernetesClusterKubeletIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterKubeletIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentity">DataAzurermKubernetesClusterKubeletIdentity</a>

---


### DataAzurermKubernetesClusterLinuxProfileList <a name="DataAzurermKubernetesClusterLinuxProfileList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterLinuxProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterLinuxProfileOutputReference <a name="DataAzurermKubernetesClusterLinuxProfileOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.sshKey">ssh_key</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList">DataAzurermKubernetesClusterLinuxProfileSshKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfile">DataAzurermKubernetesClusterLinuxProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `ssh_key`<sup>Required</sup> <a name="ssh_key" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.sshKey"></a>

```python
ssh_key: DataAzurermKubernetesClusterLinuxProfileSshKeyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList">DataAzurermKubernetesClusterLinuxProfileSshKeyList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterLinuxProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfile">DataAzurermKubernetesClusterLinuxProfile</a>

---


### DataAzurermKubernetesClusterLinuxProfileSshKeyList <a name="DataAzurermKubernetesClusterLinuxProfileSshKeyList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference <a name="DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.property.keyData">key_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKey">DataAzurermKubernetesClusterLinuxProfileSshKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_data`<sup>Required</sup> <a name="key_data" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.property.keyData"></a>

```python
key_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterLinuxProfileSshKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKey">DataAzurermKubernetesClusterLinuxProfileSshKey</a>

---


### DataAzurermKubernetesClusterMicrosoftDefenderList <a name="DataAzurermKubernetesClusterMicrosoftDefenderList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterMicrosoftDefenderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterMicrosoftDefenderOutputReference <a name="DataAzurermKubernetesClusterMicrosoftDefenderOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefender">DataAzurermKubernetesClusterMicrosoftDefender</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterMicrosoftDefender
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefender">DataAzurermKubernetesClusterMicrosoftDefender</a>

---


### DataAzurermKubernetesClusterNetworkProfileList <a name="DataAzurermKubernetesClusterNetworkProfileList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterNetworkProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterNetworkProfileOutputReference <a name="DataAzurermKubernetesClusterNetworkProfileOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.dnsServiceIp">dns_service_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.dockerBridgeCidr">docker_bridge_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.loadBalancerSku">load_balancer_sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.networkPlugin">network_plugin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.networkPolicy">network_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.podCidr">pod_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.serviceCidr">service_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfile">DataAzurermKubernetesClusterNetworkProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_service_ip`<sup>Required</sup> <a name="dns_service_ip" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.dnsServiceIp"></a>

```python
dns_service_ip: str
```

- *Type:* str

---

##### `docker_bridge_cidr`<sup>Required</sup> <a name="docker_bridge_cidr" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.dockerBridgeCidr"></a>

```python
docker_bridge_cidr: str
```

- *Type:* str

---

##### `load_balancer_sku`<sup>Required</sup> <a name="load_balancer_sku" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.loadBalancerSku"></a>

```python
load_balancer_sku: str
```

- *Type:* str

---

##### `network_plugin`<sup>Required</sup> <a name="network_plugin" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.networkPlugin"></a>

```python
network_plugin: str
```

- *Type:* str

---

##### `network_policy`<sup>Required</sup> <a name="network_policy" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.networkPolicy"></a>

```python
network_policy: str
```

- *Type:* str

---

##### `pod_cidr`<sup>Required</sup> <a name="pod_cidr" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.podCidr"></a>

```python
pod_cidr: str
```

- *Type:* str

---

##### `service_cidr`<sup>Required</sup> <a name="service_cidr" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.serviceCidr"></a>

```python
service_cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterNetworkProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfile">DataAzurermKubernetesClusterNetworkProfile</a>

---


### DataAzurermKubernetesClusterOmsAgentList <a name="DataAzurermKubernetesClusterOmsAgentList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterOmsAgentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList <a name="DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference <a name="DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity">DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity">DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity</a>

---


### DataAzurermKubernetesClusterOmsAgentOutputReference <a name="DataAzurermKubernetesClusterOmsAgentOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.msiAuthForMonitoringEnabled">msi_auth_for_monitoring_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.omsAgentIdentity">oms_agent_identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList">DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgent">DataAzurermKubernetesClusterOmsAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `msi_auth_for_monitoring_enabled`<sup>Required</sup> <a name="msi_auth_for_monitoring_enabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.msiAuthForMonitoringEnabled"></a>

```python
msi_auth_for_monitoring_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `oms_agent_identity`<sup>Required</sup> <a name="oms_agent_identity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.omsAgentIdentity"></a>

```python
oms_agent_identity: DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList">DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterOmsAgent
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgent">DataAzurermKubernetesClusterOmsAgent</a>

---


### DataAzurermKubernetesClusterServicePrincipalList <a name="DataAzurermKubernetesClusterServicePrincipalList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterServicePrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterServicePrincipalOutputReference <a name="DataAzurermKubernetesClusterServicePrincipalOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipal">DataAzurermKubernetesClusterServicePrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipal">DataAzurermKubernetesClusterServicePrincipal</a>

---


### DataAzurermKubernetesClusterStorageProfileList <a name="DataAzurermKubernetesClusterStorageProfileList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterStorageProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterStorageProfileOutputReference <a name="DataAzurermKubernetesClusterStorageProfileOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.blobDriverEnabled">blob_driver_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.diskDriverEnabled">disk_driver_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.diskDriverVersion">disk_driver_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.fileDriverEnabled">file_driver_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.snapshotControllerEnabled">snapshot_controller_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfile">DataAzurermKubernetesClusterStorageProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `blob_driver_enabled`<sup>Required</sup> <a name="blob_driver_enabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.blobDriverEnabled"></a>

```python
blob_driver_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `disk_driver_enabled`<sup>Required</sup> <a name="disk_driver_enabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.diskDriverEnabled"></a>

```python
disk_driver_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `disk_driver_version`<sup>Required</sup> <a name="disk_driver_version" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.diskDriverVersion"></a>

```python
disk_driver_version: str
```

- *Type:* str

---

##### `file_driver_enabled`<sup>Required</sup> <a name="file_driver_enabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.fileDriverEnabled"></a>

```python
file_driver_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `snapshot_controller_enabled`<sup>Required</sup> <a name="snapshot_controller_enabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.snapshotControllerEnabled"></a>

```python
snapshot_controller_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterStorageProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfile">DataAzurermKubernetesClusterStorageProfile</a>

---


### DataAzurermKubernetesClusterTimeoutsOutputReference <a name="DataAzurermKubernetesClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts">DataAzurermKubernetesClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAzurermKubernetesClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts">DataAzurermKubernetesClusterTimeouts</a>, cdktf.IResolvable]

---


### DataAzurermKubernetesClusterWindowsProfileList <a name="DataAzurermKubernetesClusterWindowsProfileList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesClusterWindowsProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesClusterWindowsProfileOutputReference <a name="DataAzurermKubernetesClusterWindowsProfileOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_kubernetes_cluster

dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfile">DataAzurermKubernetesClusterWindowsProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesClusterWindowsProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfile">DataAzurermKubernetesClusterWindowsProfile</a>

---



