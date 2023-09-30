# `azurerm_data_factory`

Refer to the Terraform Registory for docs: [`azurerm_data_factory`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory).

# `dataFactory` Submodule <a name="`dataFactory` Submodule" id="@cdktf/provider-azurerm.dataFactory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactory <a name="DataFactory" id="@cdktf/provider-azurerm.dataFactory.DataFactory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory azurerm_data_factory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory

dataFactory.DataFactory(
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
  name: str,
  resource_group_name: str,
  customer_managed_key_id: str = None,
  customer_managed_key_identity_id: str = None,
  github_configuration: DataFactoryGithubConfiguration = None,
  global_parameter: typing.Union[IResolvable, typing.List[DataFactoryGlobalParameter]] = None,
  id: str = None,
  identity: DataFactoryIdentity = None,
  managed_virtual_network_enabled: typing.Union[bool, IResolvable] = None,
  public_network_enabled: typing.Union[bool, IResolvable] = None,
  purview_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataFactoryTimeouts = None,
  vsts_configuration: DataFactoryVstsConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#location DataFactory#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#name DataFactory#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#resource_group_name DataFactory#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.customerManagedKeyId">customer_managed_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#customer_managed_key_id DataFactory#customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.customerManagedKeyIdentityId">customer_managed_key_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#customer_managed_key_identity_id DataFactory#customer_managed_key_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.githubConfiguration">github_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration">DataFactoryGithubConfiguration</a></code> | github_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.globalParameter">global_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameter">DataFactoryGlobalParameter</a>]]</code> | global_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#id DataFactory#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentity">DataFactoryIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.managedVirtualNetworkEnabled">managed_virtual_network_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#managed_virtual_network_enabled DataFactory#managed_virtual_network_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.publicNetworkEnabled">public_network_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#public_network_enabled DataFactory#public_network_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.purviewId">purview_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#purview_id DataFactory#purview_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#tags DataFactory#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeouts">DataFactoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.vstsConfiguration">vsts_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration">DataFactoryVstsConfiguration</a></code> | vsts_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#location DataFactory#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#name DataFactory#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#resource_group_name DataFactory#resource_group_name}.

---

##### `customer_managed_key_id`<sup>Optional</sup> <a name="customer_managed_key_id" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.customerManagedKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#customer_managed_key_id DataFactory#customer_managed_key_id}.

---

##### `customer_managed_key_identity_id`<sup>Optional</sup> <a name="customer_managed_key_identity_id" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.customerManagedKeyIdentityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#customer_managed_key_identity_id DataFactory#customer_managed_key_identity_id}.

---

##### `github_configuration`<sup>Optional</sup> <a name="github_configuration" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.githubConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration">DataFactoryGithubConfiguration</a>

github_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#github_configuration DataFactory#github_configuration}

---

##### `global_parameter`<sup>Optional</sup> <a name="global_parameter" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.globalParameter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameter">DataFactoryGlobalParameter</a>]]

global_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#global_parameter DataFactory#global_parameter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#id DataFactory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentity">DataFactoryIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#identity DataFactory#identity}

---

##### `managed_virtual_network_enabled`<sup>Optional</sup> <a name="managed_virtual_network_enabled" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.managedVirtualNetworkEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#managed_virtual_network_enabled DataFactory#managed_virtual_network_enabled}.

---

##### `public_network_enabled`<sup>Optional</sup> <a name="public_network_enabled" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.publicNetworkEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#public_network_enabled DataFactory#public_network_enabled}.

---

##### `purview_id`<sup>Optional</sup> <a name="purview_id" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.purviewId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#purview_id DataFactory#purview_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#tags DataFactory#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeouts">DataFactoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#timeouts DataFactory#timeouts}

---

##### `vsts_configuration`<sup>Optional</sup> <a name="vsts_configuration" id="@cdktf/provider-azurerm.dataFactory.DataFactory.Initializer.parameter.vstsConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration">DataFactoryVstsConfiguration</a>

vsts_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#vsts_configuration DataFactory#vsts_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.putGithubConfiguration">put_github_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.putGlobalParameter">put_global_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.putVstsConfiguration">put_vsts_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.resetCustomerManagedKeyId">reset_customer_managed_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.resetCustomerManagedKeyIdentityId">reset_customer_managed_key_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.resetGithubConfiguration">reset_github_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.resetGlobalParameter">reset_global_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.resetManagedVirtualNetworkEnabled">reset_managed_virtual_network_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.resetPublicNetworkEnabled">reset_public_network_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.resetPurviewId">reset_purview_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.resetVstsConfiguration">reset_vsts_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactory.DataFactory.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactory.DataFactory.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactory.DataFactory.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactory.DataFactory.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactory.DataFactory.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactory.DataFactory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactory.DataFactory.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactory.DataFactory.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactory.DataFactory.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_github_configuration` <a name="put_github_configuration" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putGithubConfiguration"></a>

```python
def put_github_configuration(
  account_name: str,
  branch_name: str,
  git_url: str,
  repository_name: str,
  root_folder: str,
  publishing_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putGithubConfiguration.parameter.accountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#account_name DataFactory#account_name}.

---

###### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putGithubConfiguration.parameter.branchName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#branch_name DataFactory#branch_name}.

---

###### `git_url`<sup>Required</sup> <a name="git_url" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putGithubConfiguration.parameter.gitUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#git_url DataFactory#git_url}.

---

###### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putGithubConfiguration.parameter.repositoryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#repository_name DataFactory#repository_name}.

---

###### `root_folder`<sup>Required</sup> <a name="root_folder" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putGithubConfiguration.parameter.rootFolder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#root_folder DataFactory#root_folder}.

---

###### `publishing_enabled`<sup>Optional</sup> <a name="publishing_enabled" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putGithubConfiguration.parameter.publishingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#publishing_enabled DataFactory#publishing_enabled}.

---

##### `put_global_parameter` <a name="put_global_parameter" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putGlobalParameter"></a>

```python
def put_global_parameter(
  value: typing.Union[IResolvable, typing.List[DataFactoryGlobalParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putGlobalParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameter">DataFactoryGlobalParameter</a>]]

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#type DataFactory#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#identity_ids DataFactory#identity_ids}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#create DataFactory#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#delete DataFactory#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#read DataFactory#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#update DataFactory#update}.

---

##### `put_vsts_configuration` <a name="put_vsts_configuration" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putVstsConfiguration"></a>

```python
def put_vsts_configuration(
  account_name: str,
  branch_name: str,
  project_name: str,
  repository_name: str,
  root_folder: str,
  tenant_id: str,
  publishing_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putVstsConfiguration.parameter.accountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#account_name DataFactory#account_name}.

---

###### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putVstsConfiguration.parameter.branchName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#branch_name DataFactory#branch_name}.

---

###### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putVstsConfiguration.parameter.projectName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#project_name DataFactory#project_name}.

---

###### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putVstsConfiguration.parameter.repositoryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#repository_name DataFactory#repository_name}.

---

###### `root_folder`<sup>Required</sup> <a name="root_folder" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putVstsConfiguration.parameter.rootFolder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#root_folder DataFactory#root_folder}.

---

###### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putVstsConfiguration.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#tenant_id DataFactory#tenant_id}.

---

###### `publishing_enabled`<sup>Optional</sup> <a name="publishing_enabled" id="@cdktf/provider-azurerm.dataFactory.DataFactory.putVstsConfiguration.parameter.publishingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#publishing_enabled DataFactory#publishing_enabled}.

---

##### `reset_customer_managed_key_id` <a name="reset_customer_managed_key_id" id="@cdktf/provider-azurerm.dataFactory.DataFactory.resetCustomerManagedKeyId"></a>

```python
def reset_customer_managed_key_id() -> None
```

##### `reset_customer_managed_key_identity_id` <a name="reset_customer_managed_key_identity_id" id="@cdktf/provider-azurerm.dataFactory.DataFactory.resetCustomerManagedKeyIdentityId"></a>

```python
def reset_customer_managed_key_identity_id() -> None
```

##### `reset_github_configuration` <a name="reset_github_configuration" id="@cdktf/provider-azurerm.dataFactory.DataFactory.resetGithubConfiguration"></a>

```python
def reset_github_configuration() -> None
```

##### `reset_global_parameter` <a name="reset_global_parameter" id="@cdktf/provider-azurerm.dataFactory.DataFactory.resetGlobalParameter"></a>

```python
def reset_global_parameter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactory.DataFactory.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.dataFactory.DataFactory.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_managed_virtual_network_enabled` <a name="reset_managed_virtual_network_enabled" id="@cdktf/provider-azurerm.dataFactory.DataFactory.resetManagedVirtualNetworkEnabled"></a>

```python
def reset_managed_virtual_network_enabled() -> None
```

##### `reset_public_network_enabled` <a name="reset_public_network_enabled" id="@cdktf/provider-azurerm.dataFactory.DataFactory.resetPublicNetworkEnabled"></a>

```python
def reset_public_network_enabled() -> None
```

##### `reset_purview_id` <a name="reset_purview_id" id="@cdktf/provider-azurerm.dataFactory.DataFactory.resetPurviewId"></a>

```python
def reset_purview_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.dataFactory.DataFactory.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactory.DataFactory.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vsts_configuration` <a name="reset_vsts_configuration" id="@cdktf/provider-azurerm.dataFactory.DataFactory.resetVstsConfiguration"></a>

```python
def reset_vsts_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactory.DataFactory.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory

dataFactory.DataFactory.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactory.DataFactory.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactory.DataFactory.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory

dataFactory.DataFactory.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactory.DataFactory.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactory.DataFactory.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory

dataFactory.DataFactory.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactory.DataFactory.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.githubConfiguration">github_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference">DataFactoryGithubConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.globalParameter">global_parameter</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList">DataFactoryGlobalParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference">DataFactoryIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference">DataFactoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.vstsConfiguration">vsts_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference">DataFactoryVstsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.customerManagedKeyIdentityIdInput">customer_managed_key_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.customerManagedKeyIdInput">customer_managed_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.githubConfigurationInput">github_configuration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration">DataFactoryGithubConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.globalParameterInput">global_parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameter">DataFactoryGlobalParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentity">DataFactoryIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.managedVirtualNetworkEnabledInput">managed_virtual_network_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.publicNetworkEnabledInput">public_network_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.purviewIdInput">purview_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeouts">DataFactoryTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.vstsConfigurationInput">vsts_configuration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration">DataFactoryVstsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.customerManagedKeyId">customer_managed_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.customerManagedKeyIdentityId">customer_managed_key_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.managedVirtualNetworkEnabled">managed_virtual_network_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.publicNetworkEnabled">public_network_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.purviewId">purview_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `github_configuration`<sup>Required</sup> <a name="github_configuration" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.githubConfiguration"></a>

```python
github_configuration: DataFactoryGithubConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference">DataFactoryGithubConfigurationOutputReference</a>

---

##### `global_parameter`<sup>Required</sup> <a name="global_parameter" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.globalParameter"></a>

```python
global_parameter: DataFactoryGlobalParameterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList">DataFactoryGlobalParameterList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.identity"></a>

```python
identity: DataFactoryIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference">DataFactoryIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.timeouts"></a>

```python
timeouts: DataFactoryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference">DataFactoryTimeoutsOutputReference</a>

---

##### `vsts_configuration`<sup>Required</sup> <a name="vsts_configuration" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.vstsConfiguration"></a>

```python
vsts_configuration: DataFactoryVstsConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference">DataFactoryVstsConfigurationOutputReference</a>

---

##### `customer_managed_key_identity_id_input`<sup>Optional</sup> <a name="customer_managed_key_identity_id_input" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.customerManagedKeyIdentityIdInput"></a>

```python
customer_managed_key_identity_id_input: str
```

- *Type:* str

---

##### `customer_managed_key_id_input`<sup>Optional</sup> <a name="customer_managed_key_id_input" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.customerManagedKeyIdInput"></a>

```python
customer_managed_key_id_input: str
```

- *Type:* str

---

##### `github_configuration_input`<sup>Optional</sup> <a name="github_configuration_input" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.githubConfigurationInput"></a>

```python
github_configuration_input: DataFactoryGithubConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration">DataFactoryGithubConfiguration</a>

---

##### `global_parameter_input`<sup>Optional</sup> <a name="global_parameter_input" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.globalParameterInput"></a>

```python
global_parameter_input: typing.Union[IResolvable, typing.List[DataFactoryGlobalParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameter">DataFactoryGlobalParameter</a>]]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.identityInput"></a>

```python
identity_input: DataFactoryIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentity">DataFactoryIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `managed_virtual_network_enabled_input`<sup>Optional</sup> <a name="managed_virtual_network_enabled_input" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.managedVirtualNetworkEnabledInput"></a>

```python
managed_virtual_network_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_network_enabled_input`<sup>Optional</sup> <a name="public_network_enabled_input" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.publicNetworkEnabledInput"></a>

```python
public_network_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `purview_id_input`<sup>Optional</sup> <a name="purview_id_input" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.purviewIdInput"></a>

```python
purview_id_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataFactoryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeouts">DataFactoryTimeouts</a>]

---

##### `vsts_configuration_input`<sup>Optional</sup> <a name="vsts_configuration_input" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.vstsConfigurationInput"></a>

```python
vsts_configuration_input: DataFactoryVstsConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration">DataFactoryVstsConfiguration</a>

---

##### `customer_managed_key_id`<sup>Required</sup> <a name="customer_managed_key_id" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.customerManagedKeyId"></a>

```python
customer_managed_key_id: str
```

- *Type:* str

---

##### `customer_managed_key_identity_id`<sup>Required</sup> <a name="customer_managed_key_identity_id" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.customerManagedKeyIdentityId"></a>

```python
customer_managed_key_identity_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `managed_virtual_network_enabled`<sup>Required</sup> <a name="managed_virtual_network_enabled" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.managedVirtualNetworkEnabled"></a>

```python
managed_virtual_network_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_network_enabled`<sup>Required</sup> <a name="public_network_enabled" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.publicNetworkEnabled"></a>

```python
public_network_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `purview_id`<sup>Required</sup> <a name="purview_id" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.purviewId"></a>

```python
purview_id: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactory.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactory.DataFactory.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryConfig <a name="DataFactoryConfig" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory

dataFactory.DataFactoryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  customer_managed_key_id: str = None,
  customer_managed_key_identity_id: str = None,
  github_configuration: DataFactoryGithubConfiguration = None,
  global_parameter: typing.Union[IResolvable, typing.List[DataFactoryGlobalParameter]] = None,
  id: str = None,
  identity: DataFactoryIdentity = None,
  managed_virtual_network_enabled: typing.Union[bool, IResolvable] = None,
  public_network_enabled: typing.Union[bool, IResolvable] = None,
  purview_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataFactoryTimeouts = None,
  vsts_configuration: DataFactoryVstsConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#location DataFactory#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#name DataFactory#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#resource_group_name DataFactory#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.customerManagedKeyId">customer_managed_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#customer_managed_key_id DataFactory#customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.customerManagedKeyIdentityId">customer_managed_key_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#customer_managed_key_identity_id DataFactory#customer_managed_key_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.githubConfiguration">github_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration">DataFactoryGithubConfiguration</a></code> | github_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.globalParameter">global_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameter">DataFactoryGlobalParameter</a>]]</code> | global_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#id DataFactory#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentity">DataFactoryIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.managedVirtualNetworkEnabled">managed_virtual_network_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#managed_virtual_network_enabled DataFactory#managed_virtual_network_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.publicNetworkEnabled">public_network_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#public_network_enabled DataFactory#public_network_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.purviewId">purview_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#purview_id DataFactory#purview_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#tags DataFactory#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeouts">DataFactoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.vstsConfiguration">vsts_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration">DataFactoryVstsConfiguration</a></code> | vsts_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#location DataFactory#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#name DataFactory#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#resource_group_name DataFactory#resource_group_name}.

---

##### `customer_managed_key_id`<sup>Optional</sup> <a name="customer_managed_key_id" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.customerManagedKeyId"></a>

```python
customer_managed_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#customer_managed_key_id DataFactory#customer_managed_key_id}.

---

##### `customer_managed_key_identity_id`<sup>Optional</sup> <a name="customer_managed_key_identity_id" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.customerManagedKeyIdentityId"></a>

```python
customer_managed_key_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#customer_managed_key_identity_id DataFactory#customer_managed_key_identity_id}.

---

##### `github_configuration`<sup>Optional</sup> <a name="github_configuration" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.githubConfiguration"></a>

```python
github_configuration: DataFactoryGithubConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration">DataFactoryGithubConfiguration</a>

github_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#github_configuration DataFactory#github_configuration}

---

##### `global_parameter`<sup>Optional</sup> <a name="global_parameter" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.globalParameter"></a>

```python
global_parameter: typing.Union[IResolvable, typing.List[DataFactoryGlobalParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameter">DataFactoryGlobalParameter</a>]]

global_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#global_parameter DataFactory#global_parameter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#id DataFactory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.identity"></a>

```python
identity: DataFactoryIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentity">DataFactoryIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#identity DataFactory#identity}

---

##### `managed_virtual_network_enabled`<sup>Optional</sup> <a name="managed_virtual_network_enabled" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.managedVirtualNetworkEnabled"></a>

```python
managed_virtual_network_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#managed_virtual_network_enabled DataFactory#managed_virtual_network_enabled}.

---

##### `public_network_enabled`<sup>Optional</sup> <a name="public_network_enabled" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.publicNetworkEnabled"></a>

```python
public_network_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#public_network_enabled DataFactory#public_network_enabled}.

---

##### `purview_id`<sup>Optional</sup> <a name="purview_id" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.purviewId"></a>

```python
purview_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#purview_id DataFactory#purview_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#tags DataFactory#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.timeouts"></a>

```python
timeouts: DataFactoryTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeouts">DataFactoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#timeouts DataFactory#timeouts}

---

##### `vsts_configuration`<sup>Optional</sup> <a name="vsts_configuration" id="@cdktf/provider-azurerm.dataFactory.DataFactoryConfig.property.vstsConfiguration"></a>

```python
vsts_configuration: DataFactoryVstsConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration">DataFactoryVstsConfiguration</a>

vsts_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#vsts_configuration DataFactory#vsts_configuration}

---

### DataFactoryGithubConfiguration <a name="DataFactoryGithubConfiguration" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory

dataFactory.DataFactoryGithubConfiguration(
  account_name: str,
  branch_name: str,
  git_url: str,
  repository_name: str,
  root_folder: str,
  publishing_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#account_name DataFactory#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration.property.branchName">branch_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#branch_name DataFactory#branch_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration.property.gitUrl">git_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#git_url DataFactory#git_url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration.property.repositoryName">repository_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#repository_name DataFactory#repository_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration.property.rootFolder">root_folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#root_folder DataFactory#root_folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration.property.publishingEnabled">publishing_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#publishing_enabled DataFactory#publishing_enabled}. |

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#account_name DataFactory#account_name}.

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#branch_name DataFactory#branch_name}.

---

##### `git_url`<sup>Required</sup> <a name="git_url" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration.property.gitUrl"></a>

```python
git_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#git_url DataFactory#git_url}.

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#repository_name DataFactory#repository_name}.

---

##### `root_folder`<sup>Required</sup> <a name="root_folder" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration.property.rootFolder"></a>

```python
root_folder: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#root_folder DataFactory#root_folder}.

---

##### `publishing_enabled`<sup>Optional</sup> <a name="publishing_enabled" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration.property.publishingEnabled"></a>

```python
publishing_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#publishing_enabled DataFactory#publishing_enabled}.

---

### DataFactoryGlobalParameter <a name="DataFactoryGlobalParameter" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory

dataFactory.DataFactoryGlobalParameter(
  name: str,
  type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#name DataFactory#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameter.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#type DataFactory#type}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameter.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#value DataFactory#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#name DataFactory#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameter.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#type DataFactory#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameter.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#value DataFactory#value}.

---

### DataFactoryIdentity <a name="DataFactoryIdentity" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory

dataFactory.DataFactoryIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#type DataFactory#type}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#identity_ids DataFactory#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#type DataFactory#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#identity_ids DataFactory#identity_ids}.

---

### DataFactoryTimeouts <a name="DataFactoryTimeouts" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory

dataFactory.DataFactoryTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#create DataFactory#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#delete DataFactory#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#read DataFactory#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#update DataFactory#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#create DataFactory#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#delete DataFactory#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#read DataFactory#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#update DataFactory#update}.

---

### DataFactoryVstsConfiguration <a name="DataFactoryVstsConfiguration" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory

dataFactory.DataFactoryVstsConfiguration(
  account_name: str,
  branch_name: str,
  project_name: str,
  repository_name: str,
  root_folder: str,
  tenant_id: str,
  publishing_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#account_name DataFactory#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration.property.branchName">branch_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#branch_name DataFactory#branch_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration.property.projectName">project_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#project_name DataFactory#project_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration.property.repositoryName">repository_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#repository_name DataFactory#repository_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration.property.rootFolder">root_folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#root_folder DataFactory#root_folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#tenant_id DataFactory#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration.property.publishingEnabled">publishing_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#publishing_enabled DataFactory#publishing_enabled}. |

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#account_name DataFactory#account_name}.

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#branch_name DataFactory#branch_name}.

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#project_name DataFactory#project_name}.

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#repository_name DataFactory#repository_name}.

---

##### `root_folder`<sup>Required</sup> <a name="root_folder" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration.property.rootFolder"></a>

```python
root_folder: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#root_folder DataFactory#root_folder}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#tenant_id DataFactory#tenant_id}.

---

##### `publishing_enabled`<sup>Optional</sup> <a name="publishing_enabled" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration.property.publishingEnabled"></a>

```python
publishing_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/data_factory#publishing_enabled DataFactory#publishing_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryGithubConfigurationOutputReference <a name="DataFactoryGithubConfigurationOutputReference" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory

dataFactory.DataFactoryGithubConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.resetPublishingEnabled">reset_publishing_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_publishing_enabled` <a name="reset_publishing_enabled" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.resetPublishingEnabled"></a>

```python
def reset_publishing_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.branchNameInput">branch_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.gitUrlInput">git_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.publishingEnabledInput">publishing_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.repositoryNameInput">repository_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.rootFolderInput">root_folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.branchName">branch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.gitUrl">git_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.publishingEnabled">publishing_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.rootFolder">root_folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration">DataFactoryGithubConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `branch_name_input`<sup>Optional</sup> <a name="branch_name_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.branchNameInput"></a>

```python
branch_name_input: str
```

- *Type:* str

---

##### `git_url_input`<sup>Optional</sup> <a name="git_url_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.gitUrlInput"></a>

```python
git_url_input: str
```

- *Type:* str

---

##### `publishing_enabled_input`<sup>Optional</sup> <a name="publishing_enabled_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.publishingEnabledInput"></a>

```python
publishing_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_name_input`<sup>Optional</sup> <a name="repository_name_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.repositoryNameInput"></a>

```python
repository_name_input: str
```

- *Type:* str

---

##### `root_folder_input`<sup>Optional</sup> <a name="root_folder_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.rootFolderInput"></a>

```python
root_folder_input: str
```

- *Type:* str

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

---

##### `git_url`<sup>Required</sup> <a name="git_url" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.gitUrl"></a>

```python
git_url: str
```

- *Type:* str

---

##### `publishing_enabled`<sup>Required</sup> <a name="publishing_enabled" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.publishingEnabled"></a>

```python
publishing_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `root_folder`<sup>Required</sup> <a name="root_folder" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.rootFolder"></a>

```python
root_folder: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryGithubConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGithubConfiguration">DataFactoryGithubConfiguration</a>

---


### DataFactoryGlobalParameterList <a name="DataFactoryGlobalParameterList" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory

dataFactory.DataFactoryGlobalParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataFactoryGlobalParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameter">DataFactoryGlobalParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataFactoryGlobalParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameter">DataFactoryGlobalParameter</a>]]

---


### DataFactoryGlobalParameterOutputReference <a name="DataFactoryGlobalParameterOutputReference" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory

dataFactory.DataFactoryGlobalParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameter">DataFactoryGlobalParameter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryGlobalParameter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryGlobalParameter">DataFactoryGlobalParameter</a>]

---


### DataFactoryIdentityOutputReference <a name="DataFactoryIdentityOutputReference" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory

dataFactory.DataFactoryIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentity">DataFactoryIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactory.DataFactoryIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryIdentity">DataFactoryIdentity</a>

---


### DataFactoryTimeoutsOutputReference <a name="DataFactoryTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory

dataFactory.DataFactoryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeouts">DataFactoryTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactory.DataFactoryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryTimeouts">DataFactoryTimeouts</a>]

---


### DataFactoryVstsConfigurationOutputReference <a name="DataFactoryVstsConfigurationOutputReference" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory

dataFactory.DataFactoryVstsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.resetPublishingEnabled">reset_publishing_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_publishing_enabled` <a name="reset_publishing_enabled" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.resetPublishingEnabled"></a>

```python
def reset_publishing_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.branchNameInput">branch_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.projectNameInput">project_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.publishingEnabledInput">publishing_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.repositoryNameInput">repository_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.rootFolderInput">root_folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.branchName">branch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.projectName">project_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.publishingEnabled">publishing_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.rootFolder">root_folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration">DataFactoryVstsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `branch_name_input`<sup>Optional</sup> <a name="branch_name_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.branchNameInput"></a>

```python
branch_name_input: str
```

- *Type:* str

---

##### `project_name_input`<sup>Optional</sup> <a name="project_name_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.projectNameInput"></a>

```python
project_name_input: str
```

- *Type:* str

---

##### `publishing_enabled_input`<sup>Optional</sup> <a name="publishing_enabled_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.publishingEnabledInput"></a>

```python
publishing_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_name_input`<sup>Optional</sup> <a name="repository_name_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.repositoryNameInput"></a>

```python
repository_name_input: str
```

- *Type:* str

---

##### `root_folder_input`<sup>Optional</sup> <a name="root_folder_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.rootFolderInput"></a>

```python
root_folder_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

---

##### `publishing_enabled`<sup>Required</sup> <a name="publishing_enabled" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.publishingEnabled"></a>

```python
publishing_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `root_folder`<sup>Required</sup> <a name="root_folder" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.rootFolder"></a>

```python
root_folder: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryVstsConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactory.DataFactoryVstsConfiguration">DataFactoryVstsConfiguration</a>

---



