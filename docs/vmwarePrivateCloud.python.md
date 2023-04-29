# `azurerm_vmware_private_cloud`

Refer to the Terraform Registory for docs: [`azurerm_vmware_private_cloud`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud).

# `vmwarePrivateCloud` Submodule <a name="`vmwarePrivateCloud` Submodule" id="@cdktf/provider-azurerm.vmwarePrivateCloud"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwarePrivateCloud <a name="VmwarePrivateCloud" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud azurerm_vmware_private_cloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_private_cloud

vmwarePrivateCloud.VmwarePrivateCloud(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  management_cluster: VmwarePrivateCloudManagementCluster,
  name: str,
  network_subnet_cidr: str,
  resource_group_name: str,
  sku_name: str,
  id: str = None,
  internet_connection_enabled: typing.Union[bool, IResolvable] = None,
  nsxt_password: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: VmwarePrivateCloudTimeouts = None,
  vcenter_password: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#location VmwarePrivateCloud#location}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.managementCluster">management_cluster</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a></code> | management_cluster block. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#name VmwarePrivateCloud#name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.networkSubnetCidr">network_subnet_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#network_subnet_cidr VmwarePrivateCloud#network_subnet_cidr}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#resource_group_name VmwarePrivateCloud#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#sku_name VmwarePrivateCloud#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#id VmwarePrivateCloud#id}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.internetConnectionEnabled">internet_connection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#internet_connection_enabled VmwarePrivateCloud#internet_connection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.nsxtPassword">nsxt_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#nsxt_password VmwarePrivateCloud#nsxt_password}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#tags VmwarePrivateCloud#tags}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.vcenterPassword">vcenter_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#vcenter_password VmwarePrivateCloud#vcenter_password}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#location VmwarePrivateCloud#location}.

---

##### `management_cluster`<sup>Required</sup> <a name="management_cluster" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.managementCluster"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a>

management_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#management_cluster VmwarePrivateCloud#management_cluster}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#name VmwarePrivateCloud#name}.

---

##### `network_subnet_cidr`<sup>Required</sup> <a name="network_subnet_cidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.networkSubnetCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#network_subnet_cidr VmwarePrivateCloud#network_subnet_cidr}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#resource_group_name VmwarePrivateCloud#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.skuName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#sku_name VmwarePrivateCloud#sku_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#id VmwarePrivateCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internet_connection_enabled`<sup>Optional</sup> <a name="internet_connection_enabled" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.internetConnectionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#internet_connection_enabled VmwarePrivateCloud#internet_connection_enabled}.

---

##### `nsxt_password`<sup>Optional</sup> <a name="nsxt_password" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.nsxtPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#nsxt_password VmwarePrivateCloud#nsxt_password}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#tags VmwarePrivateCloud#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#timeouts VmwarePrivateCloud#timeouts}

---

##### `vcenter_password`<sup>Optional</sup> <a name="vcenter_password" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.vcenterPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#vcenter_password VmwarePrivateCloud#vcenter_password}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putManagementCluster">put_management_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetInternetConnectionEnabled">reset_internet_connection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetNsxtPassword">reset_nsxt_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetVcenterPassword">reset_vcenter_password</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_management_cluster` <a name="put_management_cluster" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putManagementCluster"></a>

```python
def put_management_cluster(
  size: typing.Union[int, float]
) -> None
```

###### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putManagementCluster.parameter.size"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#size VmwarePrivateCloud#size}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#create VmwarePrivateCloud#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#delete VmwarePrivateCloud#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#read VmwarePrivateCloud#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#update VmwarePrivateCloud#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_internet_connection_enabled` <a name="reset_internet_connection_enabled" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetInternetConnectionEnabled"></a>

```python
def reset_internet_connection_enabled() -> None
```

##### `reset_nsxt_password` <a name="reset_nsxt_password" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetNsxtPassword"></a>

```python
def reset_nsxt_password() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vcenter_password` <a name="reset_vcenter_password" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetVcenterPassword"></a>

```python
def reset_vcenter_password() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_private_cloud

vmwarePrivateCloud.VmwarePrivateCloud.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_private_cloud

vmwarePrivateCloud.VmwarePrivateCloud.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_private_cloud

vmwarePrivateCloud.VmwarePrivateCloud.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.circuit">circuit</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList">VmwarePrivateCloudCircuitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.hcxCloudManagerEndpoint">hcx_cloud_manager_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementCluster">management_cluster</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference">VmwarePrivateCloudManagementClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementSubnetCidr">management_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtCertificateThumbprint">nsxt_certificate_thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtManagerEndpoint">nsxt_manager_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provisioningSubnetCidr">provisioning_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference">VmwarePrivateCloudTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterCertificateThumbprint">vcenter_certificate_thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcsaEndpoint">vcsa_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vmotionSubnetCidr">vmotion_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.internetConnectionEnabledInput">internet_connection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementClusterInput">management_cluster_input</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.networkSubnetCidrInput">network_subnet_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtPasswordInput">nsxt_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.skuNameInput">sku_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterPasswordInput">vcenter_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.internetConnectionEnabled">internet_connection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.networkSubnetCidr">network_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtPassword">nsxt_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterPassword">vcenter_password</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `circuit`<sup>Required</sup> <a name="circuit" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.circuit"></a>

```python
circuit: VmwarePrivateCloudCircuitList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList">VmwarePrivateCloudCircuitList</a>

---

##### `hcx_cloud_manager_endpoint`<sup>Required</sup> <a name="hcx_cloud_manager_endpoint" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.hcxCloudManagerEndpoint"></a>

```python
hcx_cloud_manager_endpoint: str
```

- *Type:* str

---

##### `management_cluster`<sup>Required</sup> <a name="management_cluster" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementCluster"></a>

```python
management_cluster: VmwarePrivateCloudManagementClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference">VmwarePrivateCloudManagementClusterOutputReference</a>

---

##### `management_subnet_cidr`<sup>Required</sup> <a name="management_subnet_cidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementSubnetCidr"></a>

```python
management_subnet_cidr: str
```

- *Type:* str

---

##### `nsxt_certificate_thumbprint`<sup>Required</sup> <a name="nsxt_certificate_thumbprint" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtCertificateThumbprint"></a>

```python
nsxt_certificate_thumbprint: str
```

- *Type:* str

---

##### `nsxt_manager_endpoint`<sup>Required</sup> <a name="nsxt_manager_endpoint" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtManagerEndpoint"></a>

```python
nsxt_manager_endpoint: str
```

- *Type:* str

---

##### `provisioning_subnet_cidr`<sup>Required</sup> <a name="provisioning_subnet_cidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provisioningSubnetCidr"></a>

```python
provisioning_subnet_cidr: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.timeouts"></a>

```python
timeouts: VmwarePrivateCloudTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference">VmwarePrivateCloudTimeoutsOutputReference</a>

---

##### `vcenter_certificate_thumbprint`<sup>Required</sup> <a name="vcenter_certificate_thumbprint" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterCertificateThumbprint"></a>

```python
vcenter_certificate_thumbprint: str
```

- *Type:* str

---

##### `vcsa_endpoint`<sup>Required</sup> <a name="vcsa_endpoint" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcsaEndpoint"></a>

```python
vcsa_endpoint: str
```

- *Type:* str

---

##### `vmotion_subnet_cidr`<sup>Required</sup> <a name="vmotion_subnet_cidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vmotionSubnetCidr"></a>

```python
vmotion_subnet_cidr: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `internet_connection_enabled_input`<sup>Optional</sup> <a name="internet_connection_enabled_input" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.internetConnectionEnabledInput"></a>

```python
internet_connection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `management_cluster_input`<sup>Optional</sup> <a name="management_cluster_input" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementClusterInput"></a>

```python
management_cluster_input: VmwarePrivateCloudManagementCluster
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_subnet_cidr_input`<sup>Optional</sup> <a name="network_subnet_cidr_input" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.networkSubnetCidrInput"></a>

```python
network_subnet_cidr_input: str
```

- *Type:* str

---

##### `nsxt_password_input`<sup>Optional</sup> <a name="nsxt_password_input" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtPasswordInput"></a>

```python
nsxt_password_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_name_input`<sup>Optional</sup> <a name="sku_name_input" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.skuNameInput"></a>

```python
sku_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[VmwarePrivateCloudTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a>, cdktf.IResolvable]

---

##### `vcenter_password_input`<sup>Optional</sup> <a name="vcenter_password_input" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterPasswordInput"></a>

```python
vcenter_password_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internet_connection_enabled`<sup>Required</sup> <a name="internet_connection_enabled" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.internetConnectionEnabled"></a>

```python
internet_connection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_subnet_cidr`<sup>Required</sup> <a name="network_subnet_cidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.networkSubnetCidr"></a>

```python
network_subnet_cidr: str
```

- *Type:* str

---

##### `nsxt_password`<sup>Required</sup> <a name="nsxt_password" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtPassword"></a>

```python
nsxt_password: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vcenter_password`<sup>Required</sup> <a name="vcenter_password" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterPassword"></a>

```python
vcenter_password: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VmwarePrivateCloudCircuit <a name="VmwarePrivateCloudCircuit" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuit.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_private_cloud

vmwarePrivateCloud.VmwarePrivateCloudCircuit()
```


### VmwarePrivateCloudConfig <a name="VmwarePrivateCloudConfig" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_private_cloud

vmwarePrivateCloud.VmwarePrivateCloudConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  management_cluster: VmwarePrivateCloudManagementCluster,
  name: str,
  network_subnet_cidr: str,
  resource_group_name: str,
  sku_name: str,
  id: str = None,
  internet_connection_enabled: typing.Union[bool, IResolvable] = None,
  nsxt_password: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: VmwarePrivateCloudTimeouts = None,
  vcenter_password: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#location VmwarePrivateCloud#location}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.managementCluster">management_cluster</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a></code> | management_cluster block. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#name VmwarePrivateCloud#name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.networkSubnetCidr">network_subnet_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#network_subnet_cidr VmwarePrivateCloud#network_subnet_cidr}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#resource_group_name VmwarePrivateCloud#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#sku_name VmwarePrivateCloud#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#id VmwarePrivateCloud#id}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.internetConnectionEnabled">internet_connection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#internet_connection_enabled VmwarePrivateCloud#internet_connection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.nsxtPassword">nsxt_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#nsxt_password VmwarePrivateCloud#nsxt_password}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#tags VmwarePrivateCloud#tags}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.vcenterPassword">vcenter_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#vcenter_password VmwarePrivateCloud#vcenter_password}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#location VmwarePrivateCloud#location}.

---

##### `management_cluster`<sup>Required</sup> <a name="management_cluster" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.managementCluster"></a>

```python
management_cluster: VmwarePrivateCloudManagementCluster
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a>

management_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#management_cluster VmwarePrivateCloud#management_cluster}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#name VmwarePrivateCloud#name}.

---

##### `network_subnet_cidr`<sup>Required</sup> <a name="network_subnet_cidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.networkSubnetCidr"></a>

```python
network_subnet_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#network_subnet_cidr VmwarePrivateCloud#network_subnet_cidr}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#resource_group_name VmwarePrivateCloud#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#sku_name VmwarePrivateCloud#sku_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#id VmwarePrivateCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internet_connection_enabled`<sup>Optional</sup> <a name="internet_connection_enabled" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.internetConnectionEnabled"></a>

```python
internet_connection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#internet_connection_enabled VmwarePrivateCloud#internet_connection_enabled}.

---

##### `nsxt_password`<sup>Optional</sup> <a name="nsxt_password" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.nsxtPassword"></a>

```python
nsxt_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#nsxt_password VmwarePrivateCloud#nsxt_password}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#tags VmwarePrivateCloud#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.timeouts"></a>

```python
timeouts: VmwarePrivateCloudTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#timeouts VmwarePrivateCloud#timeouts}

---

##### `vcenter_password`<sup>Optional</sup> <a name="vcenter_password" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.vcenterPassword"></a>

```python
vcenter_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#vcenter_password VmwarePrivateCloud#vcenter_password}.

---

### VmwarePrivateCloudManagementCluster <a name="VmwarePrivateCloudManagementCluster" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_private_cloud

vmwarePrivateCloud.VmwarePrivateCloudManagementCluster(
  size: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#size VmwarePrivateCloud#size}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#size VmwarePrivateCloud#size}.

---

### VmwarePrivateCloudTimeouts <a name="VmwarePrivateCloudTimeouts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_private_cloud

vmwarePrivateCloud.VmwarePrivateCloudTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#create VmwarePrivateCloud#create}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#delete VmwarePrivateCloud#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#read VmwarePrivateCloud#read}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#update VmwarePrivateCloud#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#create VmwarePrivateCloud#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#delete VmwarePrivateCloud#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#read VmwarePrivateCloud#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/vmware_private_cloud#update VmwarePrivateCloud#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwarePrivateCloudCircuitList <a name="VmwarePrivateCloudCircuitList" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_private_cloud

vmwarePrivateCloud.VmwarePrivateCloudCircuitList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VmwarePrivateCloudCircuitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VmwarePrivateCloudCircuitOutputReference <a name="VmwarePrivateCloudCircuitOutputReference" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_private_cloud

vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.expressRouteId">express_route_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.expressRoutePrivatePeeringId">express_route_private_peering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.primarySubnetCidr">primary_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.secondarySubnetCidr">secondary_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuit">VmwarePrivateCloudCircuit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `express_route_id`<sup>Required</sup> <a name="express_route_id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.expressRouteId"></a>

```python
express_route_id: str
```

- *Type:* str

---

##### `express_route_private_peering_id`<sup>Required</sup> <a name="express_route_private_peering_id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.expressRoutePrivatePeeringId"></a>

```python
express_route_private_peering_id: str
```

- *Type:* str

---

##### `primary_subnet_cidr`<sup>Required</sup> <a name="primary_subnet_cidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.primarySubnetCidr"></a>

```python
primary_subnet_cidr: str
```

- *Type:* str

---

##### `secondary_subnet_cidr`<sup>Required</sup> <a name="secondary_subnet_cidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.secondarySubnetCidr"></a>

```python
secondary_subnet_cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.internalValue"></a>

```python
internal_value: VmwarePrivateCloudCircuit
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuit">VmwarePrivateCloudCircuit</a>

---


### VmwarePrivateCloudManagementClusterOutputReference <a name="VmwarePrivateCloudManagementClusterOutputReference" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_private_cloud

vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.internalValue"></a>

```python
internal_value: VmwarePrivateCloudManagementCluster
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a>

---


### VmwarePrivateCloudTimeoutsOutputReference <a name="VmwarePrivateCloudTimeoutsOutputReference" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_private_cloud

vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VmwarePrivateCloudTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a>, cdktf.IResolvable]

---



