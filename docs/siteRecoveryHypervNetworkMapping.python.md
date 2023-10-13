# `azurerm_site_recovery_hyperv_network_mapping`

Refer to the Terraform Registory for docs: [`azurerm_site_recovery_hyperv_network_mapping`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping).

# `siteRecoveryHypervNetworkMapping` Submodule <a name="`siteRecoveryHypervNetworkMapping` Submodule" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryHypervNetworkMapping <a name="SiteRecoveryHypervNetworkMapping" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping azurerm_site_recovery_hyperv_network_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_hyperv_network_mapping

siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping(
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
  recovery_vault_id: str,
  source_network_name: str,
  source_system_center_virtual_machine_manager_name: str,
  target_network_id: str,
  id: str = None,
  timeouts: SiteRecoveryHypervNetworkMappingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#name SiteRecoveryHypervNetworkMapping#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.recoveryVaultId">recovery_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#recovery_vault_id SiteRecoveryHypervNetworkMapping#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.sourceNetworkName">source_network_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#source_network_name SiteRecoveryHypervNetworkMapping#source_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.sourceSystemCenterVirtualMachineManagerName">source_system_center_virtual_machine_manager_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#source_system_center_virtual_machine_manager_name SiteRecoveryHypervNetworkMapping#source_system_center_virtual_machine_manager_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.targetNetworkId">target_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#target_network_id SiteRecoveryHypervNetworkMapping#target_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#id SiteRecoveryHypervNetworkMapping#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts">SiteRecoveryHypervNetworkMappingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#name SiteRecoveryHypervNetworkMapping#name}.

---

##### `recovery_vault_id`<sup>Required</sup> <a name="recovery_vault_id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.recoveryVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#recovery_vault_id SiteRecoveryHypervNetworkMapping#recovery_vault_id}.

---

##### `source_network_name`<sup>Required</sup> <a name="source_network_name" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.sourceNetworkName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#source_network_name SiteRecoveryHypervNetworkMapping#source_network_name}.

---

##### `source_system_center_virtual_machine_manager_name`<sup>Required</sup> <a name="source_system_center_virtual_machine_manager_name" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.sourceSystemCenterVirtualMachineManagerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#source_system_center_virtual_machine_manager_name SiteRecoveryHypervNetworkMapping#source_system_center_virtual_machine_manager_name}.

---

##### `target_network_id`<sup>Required</sup> <a name="target_network_id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.targetNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#target_network_id SiteRecoveryHypervNetworkMapping#target_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#id SiteRecoveryHypervNetworkMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts">SiteRecoveryHypervNetworkMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#timeouts SiteRecoveryHypervNetworkMapping#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#create SiteRecoveryHypervNetworkMapping#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#delete SiteRecoveryHypervNetworkMapping#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#read SiteRecoveryHypervNetworkMapping#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_hyperv_network_mapping

siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_hyperv_network_mapping

siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_hyperv_network_mapping

siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference">SiteRecoveryHypervNetworkMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.recoveryVaultIdInput">recovery_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.sourceNetworkNameInput">source_network_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.sourceSystemCenterVirtualMachineManagerNameInput">source_system_center_virtual_machine_manager_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.targetNetworkIdInput">target_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts">SiteRecoveryHypervNetworkMappingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.recoveryVaultId">recovery_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.sourceNetworkName">source_network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.sourceSystemCenterVirtualMachineManagerName">source_system_center_virtual_machine_manager_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.targetNetworkId">target_network_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.timeouts"></a>

```python
timeouts: SiteRecoveryHypervNetworkMappingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference">SiteRecoveryHypervNetworkMappingTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recovery_vault_id_input`<sup>Optional</sup> <a name="recovery_vault_id_input" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.recoveryVaultIdInput"></a>

```python
recovery_vault_id_input: str
```

- *Type:* str

---

##### `source_network_name_input`<sup>Optional</sup> <a name="source_network_name_input" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.sourceNetworkNameInput"></a>

```python
source_network_name_input: str
```

- *Type:* str

---

##### `source_system_center_virtual_machine_manager_name_input`<sup>Optional</sup> <a name="source_system_center_virtual_machine_manager_name_input" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.sourceSystemCenterVirtualMachineManagerNameInput"></a>

```python
source_system_center_virtual_machine_manager_name_input: str
```

- *Type:* str

---

##### `target_network_id_input`<sup>Optional</sup> <a name="target_network_id_input" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.targetNetworkIdInput"></a>

```python
target_network_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SiteRecoveryHypervNetworkMappingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts">SiteRecoveryHypervNetworkMappingTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recovery_vault_id`<sup>Required</sup> <a name="recovery_vault_id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.recoveryVaultId"></a>

```python
recovery_vault_id: str
```

- *Type:* str

---

##### `source_network_name`<sup>Required</sup> <a name="source_network_name" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.sourceNetworkName"></a>

```python
source_network_name: str
```

- *Type:* str

---

##### `source_system_center_virtual_machine_manager_name`<sup>Required</sup> <a name="source_system_center_virtual_machine_manager_name" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.sourceSystemCenterVirtualMachineManagerName"></a>

```python
source_system_center_virtual_machine_manager_name: str
```

- *Type:* str

---

##### `target_network_id`<sup>Required</sup> <a name="target_network_id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.targetNetworkId"></a>

```python
target_network_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMapping.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryHypervNetworkMappingConfig <a name="SiteRecoveryHypervNetworkMappingConfig" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_hyperv_network_mapping

siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  recovery_vault_id: str,
  source_network_name: str,
  source_system_center_virtual_machine_manager_name: str,
  target_network_id: str,
  id: str = None,
  timeouts: SiteRecoveryHypervNetworkMappingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#name SiteRecoveryHypervNetworkMapping#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.recoveryVaultId">recovery_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#recovery_vault_id SiteRecoveryHypervNetworkMapping#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.sourceNetworkName">source_network_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#source_network_name SiteRecoveryHypervNetworkMapping#source_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.sourceSystemCenterVirtualMachineManagerName">source_system_center_virtual_machine_manager_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#source_system_center_virtual_machine_manager_name SiteRecoveryHypervNetworkMapping#source_system_center_virtual_machine_manager_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.targetNetworkId">target_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#target_network_id SiteRecoveryHypervNetworkMapping#target_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#id SiteRecoveryHypervNetworkMapping#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts">SiteRecoveryHypervNetworkMappingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#name SiteRecoveryHypervNetworkMapping#name}.

---

##### `recovery_vault_id`<sup>Required</sup> <a name="recovery_vault_id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.recoveryVaultId"></a>

```python
recovery_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#recovery_vault_id SiteRecoveryHypervNetworkMapping#recovery_vault_id}.

---

##### `source_network_name`<sup>Required</sup> <a name="source_network_name" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.sourceNetworkName"></a>

```python
source_network_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#source_network_name SiteRecoveryHypervNetworkMapping#source_network_name}.

---

##### `source_system_center_virtual_machine_manager_name`<sup>Required</sup> <a name="source_system_center_virtual_machine_manager_name" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.sourceSystemCenterVirtualMachineManagerName"></a>

```python
source_system_center_virtual_machine_manager_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#source_system_center_virtual_machine_manager_name SiteRecoveryHypervNetworkMapping#source_system_center_virtual_machine_manager_name}.

---

##### `target_network_id`<sup>Required</sup> <a name="target_network_id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.targetNetworkId"></a>

```python
target_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#target_network_id SiteRecoveryHypervNetworkMapping#target_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#id SiteRecoveryHypervNetworkMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingConfig.property.timeouts"></a>

```python
timeouts: SiteRecoveryHypervNetworkMappingTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts">SiteRecoveryHypervNetworkMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#timeouts SiteRecoveryHypervNetworkMapping#timeouts}

---

### SiteRecoveryHypervNetworkMappingTimeouts <a name="SiteRecoveryHypervNetworkMappingTimeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_hyperv_network_mapping

siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#create SiteRecoveryHypervNetworkMapping#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#delete SiteRecoveryHypervNetworkMapping#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#read SiteRecoveryHypervNetworkMapping#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#create SiteRecoveryHypervNetworkMapping#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#delete SiteRecoveryHypervNetworkMapping#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/site_recovery_hyperv_network_mapping#read SiteRecoveryHypervNetworkMapping#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryHypervNetworkMappingTimeoutsOutputReference <a name="SiteRecoveryHypervNetworkMappingTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_hyperv_network_mapping

siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts">SiteRecoveryHypervNetworkMappingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SiteRecoveryHypervNetworkMappingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryHypervNetworkMapping.SiteRecoveryHypervNetworkMappingTimeouts">SiteRecoveryHypervNetworkMappingTimeouts</a>]

---



