# `azurerm_site_recovery_replication_recovery_plan`

Refer to the Terraform Registory for docs: [`azurerm_site_recovery_replication_recovery_plan`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan).

# `siteRecoveryReplicationRecoveryPlan` Submodule <a name="`siteRecoveryReplicationRecoveryPlan` Submodule" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryReplicationRecoveryPlan <a name="SiteRecoveryReplicationRecoveryPlan" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan azurerm_site_recovery_replication_recovery_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_replication_recovery_plan

siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan(
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
  source_recovery_fabric_id: str,
  target_recovery_fabric_id: str,
  azure_to_azure_settings: SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings = None,
  id: str = None,
  recovery_group: typing.Union[IResolvable, typing.List[SiteRecoveryReplicationRecoveryPlanRecoveryGroup]] = None,
  timeouts: SiteRecoveryReplicationRecoveryPlanTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.recoveryVaultId">recovery_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#recovery_vault_id SiteRecoveryReplicationRecoveryPlan#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.sourceRecoveryFabricId">source_recovery_fabric_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#source_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#source_recovery_fabric_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.targetRecoveryFabricId">target_recovery_fabric_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#target_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#target_recovery_fabric_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.azureToAzureSettings">azure_to_azure_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings">SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings</a></code> | azure_to_azure_settings block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#id SiteRecoveryReplicationRecoveryPlan#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.recoveryGroup">recovery_group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>]]</code> | recovery_group block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}.

---

##### `recovery_vault_id`<sup>Required</sup> <a name="recovery_vault_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.recoveryVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#recovery_vault_id SiteRecoveryReplicationRecoveryPlan#recovery_vault_id}.

---

##### `source_recovery_fabric_id`<sup>Required</sup> <a name="source_recovery_fabric_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.sourceRecoveryFabricId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#source_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#source_recovery_fabric_id}.

---

##### `target_recovery_fabric_id`<sup>Required</sup> <a name="target_recovery_fabric_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.targetRecoveryFabricId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#target_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#target_recovery_fabric_id}.

---

##### `azure_to_azure_settings`<sup>Optional</sup> <a name="azure_to_azure_settings" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.azureToAzureSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings">SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings</a>

azure_to_azure_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#azure_to_azure_settings SiteRecoveryReplicationRecoveryPlan#azure_to_azure_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#id SiteRecoveryReplicationRecoveryPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `recovery_group`<sup>Optional</sup> <a name="recovery_group" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.recoveryGroup"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>]]

recovery_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#recovery_group SiteRecoveryReplicationRecoveryPlan#recovery_group}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#timeouts SiteRecoveryReplicationRecoveryPlan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putAzureToAzureSettings">put_azure_to_azure_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putRecoveryGroup">put_recovery_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetAzureToAzureSettings">reset_azure_to_azure_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetRecoveryGroup">reset_recovery_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_azure_to_azure_settings` <a name="put_azure_to_azure_settings" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putAzureToAzureSettings"></a>

```python
def put_azure_to_azure_settings(
  primary_edge_zone: str = None,
  primary_zone: str = None,
  recovery_edge_zone: str = None,
  recovery_zone: str = None
) -> None
```

###### `primary_edge_zone`<sup>Optional</sup> <a name="primary_edge_zone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putAzureToAzureSettings.parameter.primaryEdgeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#primary_edge_zone SiteRecoveryReplicationRecoveryPlan#primary_edge_zone}.

---

###### `primary_zone`<sup>Optional</sup> <a name="primary_zone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putAzureToAzureSettings.parameter.primaryZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#primary_zone SiteRecoveryReplicationRecoveryPlan#primary_zone}.

---

###### `recovery_edge_zone`<sup>Optional</sup> <a name="recovery_edge_zone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putAzureToAzureSettings.parameter.recoveryEdgeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#recovery_edge_zone SiteRecoveryReplicationRecoveryPlan#recovery_edge_zone}.

---

###### `recovery_zone`<sup>Optional</sup> <a name="recovery_zone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putAzureToAzureSettings.parameter.recoveryZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#recovery_zone SiteRecoveryReplicationRecoveryPlan#recovery_zone}.

---

##### `put_recovery_group` <a name="put_recovery_group" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putRecoveryGroup"></a>

```python
def put_recovery_group(
  value: typing.Union[IResolvable, typing.List[SiteRecoveryReplicationRecoveryPlanRecoveryGroup]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putRecoveryGroup.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#create SiteRecoveryReplicationRecoveryPlan#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#delete SiteRecoveryReplicationRecoveryPlan#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#read SiteRecoveryReplicationRecoveryPlan#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#update SiteRecoveryReplicationRecoveryPlan#update}.

---

##### `reset_azure_to_azure_settings` <a name="reset_azure_to_azure_settings" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetAzureToAzureSettings"></a>

```python
def reset_azure_to_azure_settings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_recovery_group` <a name="reset_recovery_group" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetRecoveryGroup"></a>

```python
def reset_recovery_group() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_replication_recovery_plan

siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_replication_recovery_plan

siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_replication_recovery_plan

siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.azureToAzureSettings">azure_to_azure_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference">SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryGroup">recovery_group</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList">SiteRecoveryReplicationRecoveryPlanRecoveryGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference">SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.azureToAzureSettingsInput">azure_to_azure_settings_input</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings">SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryGroupInput">recovery_group_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryVaultIdInput">recovery_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.sourceRecoveryFabricIdInput">source_recovery_fabric_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.targetRecoveryFabricIdInput">target_recovery_fabric_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryVaultId">recovery_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.sourceRecoveryFabricId">source_recovery_fabric_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.targetRecoveryFabricId">target_recovery_fabric_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `azure_to_azure_settings`<sup>Required</sup> <a name="azure_to_azure_settings" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.azureToAzureSettings"></a>

```python
azure_to_azure_settings: SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference">SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference</a>

---

##### `recovery_group`<sup>Required</sup> <a name="recovery_group" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryGroup"></a>

```python
recovery_group: SiteRecoveryReplicationRecoveryPlanRecoveryGroupList
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList">SiteRecoveryReplicationRecoveryPlanRecoveryGroupList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.timeouts"></a>

```python
timeouts: SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference">SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference</a>

---

##### `azure_to_azure_settings_input`<sup>Optional</sup> <a name="azure_to_azure_settings_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.azureToAzureSettingsInput"></a>

```python
azure_to_azure_settings_input: SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings">SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recovery_group_input`<sup>Optional</sup> <a name="recovery_group_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryGroupInput"></a>

```python
recovery_group_input: typing.Union[IResolvable, typing.List[SiteRecoveryReplicationRecoveryPlanRecoveryGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>]]

---

##### `recovery_vault_id_input`<sup>Optional</sup> <a name="recovery_vault_id_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryVaultIdInput"></a>

```python
recovery_vault_id_input: str
```

- *Type:* str

---

##### `source_recovery_fabric_id_input`<sup>Optional</sup> <a name="source_recovery_fabric_id_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.sourceRecoveryFabricIdInput"></a>

```python
source_recovery_fabric_id_input: str
```

- *Type:* str

---

##### `target_recovery_fabric_id_input`<sup>Optional</sup> <a name="target_recovery_fabric_id_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.targetRecoveryFabricIdInput"></a>

```python
target_recovery_fabric_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SiteRecoveryReplicationRecoveryPlanTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recovery_vault_id`<sup>Required</sup> <a name="recovery_vault_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryVaultId"></a>

```python
recovery_vault_id: str
```

- *Type:* str

---

##### `source_recovery_fabric_id`<sup>Required</sup> <a name="source_recovery_fabric_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.sourceRecoveryFabricId"></a>

```python
source_recovery_fabric_id: str
```

- *Type:* str

---

##### `target_recovery_fabric_id`<sup>Required</sup> <a name="target_recovery_fabric_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.targetRecoveryFabricId"></a>

```python
target_recovery_fabric_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings <a name="SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_replication_recovery_plan

siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings(
  primary_edge_zone: str = None,
  primary_zone: str = None,
  recovery_edge_zone: str = None,
  recovery_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.property.primaryEdgeZone">primary_edge_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#primary_edge_zone SiteRecoveryReplicationRecoveryPlan#primary_edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.property.primaryZone">primary_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#primary_zone SiteRecoveryReplicationRecoveryPlan#primary_zone}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.property.recoveryEdgeZone">recovery_edge_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#recovery_edge_zone SiteRecoveryReplicationRecoveryPlan#recovery_edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.property.recoveryZone">recovery_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#recovery_zone SiteRecoveryReplicationRecoveryPlan#recovery_zone}. |

---

##### `primary_edge_zone`<sup>Optional</sup> <a name="primary_edge_zone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.property.primaryEdgeZone"></a>

```python
primary_edge_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#primary_edge_zone SiteRecoveryReplicationRecoveryPlan#primary_edge_zone}.

---

##### `primary_zone`<sup>Optional</sup> <a name="primary_zone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.property.primaryZone"></a>

```python
primary_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#primary_zone SiteRecoveryReplicationRecoveryPlan#primary_zone}.

---

##### `recovery_edge_zone`<sup>Optional</sup> <a name="recovery_edge_zone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.property.recoveryEdgeZone"></a>

```python
recovery_edge_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#recovery_edge_zone SiteRecoveryReplicationRecoveryPlan#recovery_edge_zone}.

---

##### `recovery_zone`<sup>Optional</sup> <a name="recovery_zone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.property.recoveryZone"></a>

```python
recovery_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#recovery_zone SiteRecoveryReplicationRecoveryPlan#recovery_zone}.

---

### SiteRecoveryReplicationRecoveryPlanConfig <a name="SiteRecoveryReplicationRecoveryPlanConfig" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_replication_recovery_plan

siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  recovery_vault_id: str,
  source_recovery_fabric_id: str,
  target_recovery_fabric_id: str,
  azure_to_azure_settings: SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings = None,
  id: str = None,
  recovery_group: typing.Union[IResolvable, typing.List[SiteRecoveryReplicationRecoveryPlanRecoveryGroup]] = None,
  timeouts: SiteRecoveryReplicationRecoveryPlanTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.recoveryVaultId">recovery_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#recovery_vault_id SiteRecoveryReplicationRecoveryPlan#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.sourceRecoveryFabricId">source_recovery_fabric_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#source_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#source_recovery_fabric_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.targetRecoveryFabricId">target_recovery_fabric_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#target_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#target_recovery_fabric_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.azureToAzureSettings">azure_to_azure_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings">SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings</a></code> | azure_to_azure_settings block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#id SiteRecoveryReplicationRecoveryPlan#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.recoveryGroup">recovery_group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>]]</code> | recovery_group block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}.

---

##### `recovery_vault_id`<sup>Required</sup> <a name="recovery_vault_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.recoveryVaultId"></a>

```python
recovery_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#recovery_vault_id SiteRecoveryReplicationRecoveryPlan#recovery_vault_id}.

---

##### `source_recovery_fabric_id`<sup>Required</sup> <a name="source_recovery_fabric_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.sourceRecoveryFabricId"></a>

```python
source_recovery_fabric_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#source_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#source_recovery_fabric_id}.

---

##### `target_recovery_fabric_id`<sup>Required</sup> <a name="target_recovery_fabric_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.targetRecoveryFabricId"></a>

```python
target_recovery_fabric_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#target_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#target_recovery_fabric_id}.

---

##### `azure_to_azure_settings`<sup>Optional</sup> <a name="azure_to_azure_settings" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.azureToAzureSettings"></a>

```python
azure_to_azure_settings: SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings">SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings</a>

azure_to_azure_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#azure_to_azure_settings SiteRecoveryReplicationRecoveryPlan#azure_to_azure_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#id SiteRecoveryReplicationRecoveryPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `recovery_group`<sup>Optional</sup> <a name="recovery_group" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.recoveryGroup"></a>

```python
recovery_group: typing.Union[IResolvable, typing.List[SiteRecoveryReplicationRecoveryPlanRecoveryGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>]]

recovery_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#recovery_group SiteRecoveryReplicationRecoveryPlan#recovery_group}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.timeouts"></a>

```python
timeouts: SiteRecoveryReplicationRecoveryPlanTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#timeouts SiteRecoveryReplicationRecoveryPlan#timeouts}

---

### SiteRecoveryReplicationRecoveryPlanRecoveryGroup <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_replication_recovery_plan

siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup(
  type: str,
  post_action: typing.Union[IResolvable, typing.List[SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction]] = None,
  pre_action: typing.Union[IResolvable, typing.List[SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction]] = None,
  replicated_protected_items: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.postAction">post_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a>]]</code> | post_action block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.preAction">pre_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a>]]</code> | pre_action block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.replicatedProtectedItems">replicated_protected_items</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#replicated_protected_items SiteRecoveryReplicationRecoveryPlan#replicated_protected_items}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}.

---

##### `post_action`<sup>Optional</sup> <a name="post_action" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.postAction"></a>

```python
post_action: typing.Union[IResolvable, typing.List[SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a>]]

post_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#post_action SiteRecoveryReplicationRecoveryPlan#post_action}

---

##### `pre_action`<sup>Optional</sup> <a name="pre_action" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.preAction"></a>

```python
pre_action: typing.Union[IResolvable, typing.List[SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a>]]

pre_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#pre_action SiteRecoveryReplicationRecoveryPlan#pre_action}

---

##### `replicated_protected_items`<sup>Optional</sup> <a name="replicated_protected_items" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.replicatedProtectedItems"></a>

```python
replicated_protected_items: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#replicated_protected_items SiteRecoveryReplicationRecoveryPlan#replicated_protected_items}.

---

### SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_replication_recovery_plan

siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction(
  fail_over_directions: typing.List[str],
  fail_over_types: typing.List[str],
  name: str,
  type: str,
  fabric_location: str = None,
  manual_action_instruction: str = None,
  runbook_id: str = None,
  script_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.failOverDirections">fail_over_directions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.failOverTypes">fail_over_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.fabricLocation">fabric_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.manualActionInstruction">manual_action_instruction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.runbookId">runbook_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.scriptPath">script_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}. |

---

##### `fail_over_directions`<sup>Required</sup> <a name="fail_over_directions" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.failOverDirections"></a>

```python
fail_over_directions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}.

---

##### `fail_over_types`<sup>Required</sup> <a name="fail_over_types" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.failOverTypes"></a>

```python
fail_over_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}.

---

##### `fabric_location`<sup>Optional</sup> <a name="fabric_location" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.fabricLocation"></a>

```python
fabric_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}.

---

##### `manual_action_instruction`<sup>Optional</sup> <a name="manual_action_instruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.manualActionInstruction"></a>

```python
manual_action_instruction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}.

---

##### `runbook_id`<sup>Optional</sup> <a name="runbook_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.runbookId"></a>

```python
runbook_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}.

---

##### `script_path`<sup>Optional</sup> <a name="script_path" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.scriptPath"></a>

```python
script_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}.

---

### SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_replication_recovery_plan

siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction(
  fail_over_directions: typing.List[str],
  fail_over_types: typing.List[str],
  name: str,
  type: str,
  fabric_location: str = None,
  manual_action_instruction: str = None,
  runbook_id: str = None,
  script_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.failOverDirections">fail_over_directions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.failOverTypes">fail_over_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.fabricLocation">fabric_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.manualActionInstruction">manual_action_instruction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.runbookId">runbook_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.scriptPath">script_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}. |

---

##### `fail_over_directions`<sup>Required</sup> <a name="fail_over_directions" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.failOverDirections"></a>

```python
fail_over_directions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}.

---

##### `fail_over_types`<sup>Required</sup> <a name="fail_over_types" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.failOverTypes"></a>

```python
fail_over_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}.

---

##### `fabric_location`<sup>Optional</sup> <a name="fabric_location" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.fabricLocation"></a>

```python
fabric_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}.

---

##### `manual_action_instruction`<sup>Optional</sup> <a name="manual_action_instruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.manualActionInstruction"></a>

```python
manual_action_instruction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}.

---

##### `runbook_id`<sup>Optional</sup> <a name="runbook_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.runbookId"></a>

```python
runbook_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}.

---

##### `script_path`<sup>Optional</sup> <a name="script_path" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.scriptPath"></a>

```python
script_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}.

---

### SiteRecoveryReplicationRecoveryPlanTimeouts <a name="SiteRecoveryReplicationRecoveryPlanTimeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_replication_recovery_plan

siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#create SiteRecoveryReplicationRecoveryPlan#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#delete SiteRecoveryReplicationRecoveryPlan#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#read SiteRecoveryReplicationRecoveryPlan#read}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#update SiteRecoveryReplicationRecoveryPlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#create SiteRecoveryReplicationRecoveryPlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#delete SiteRecoveryReplicationRecoveryPlan#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#read SiteRecoveryReplicationRecoveryPlan#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/site_recovery_replication_recovery_plan#update SiteRecoveryReplicationRecoveryPlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference <a name="SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_replication_recovery_plan

siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resetPrimaryEdgeZone">reset_primary_edge_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resetPrimaryZone">reset_primary_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resetRecoveryEdgeZone">reset_recovery_edge_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resetRecoveryZone">reset_recovery_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_primary_edge_zone` <a name="reset_primary_edge_zone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resetPrimaryEdgeZone"></a>

```python
def reset_primary_edge_zone() -> None
```

##### `reset_primary_zone` <a name="reset_primary_zone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resetPrimaryZone"></a>

```python
def reset_primary_zone() -> None
```

##### `reset_recovery_edge_zone` <a name="reset_recovery_edge_zone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resetRecoveryEdgeZone"></a>

```python
def reset_recovery_edge_zone() -> None
```

##### `reset_recovery_zone` <a name="reset_recovery_zone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resetRecoveryZone"></a>

```python
def reset_recovery_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryEdgeZoneInput">primary_edge_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryZoneInput">primary_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryEdgeZoneInput">recovery_edge_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryZoneInput">recovery_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryEdgeZone">primary_edge_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryZone">primary_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryEdgeZone">recovery_edge_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryZone">recovery_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings">SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_edge_zone_input`<sup>Optional</sup> <a name="primary_edge_zone_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryEdgeZoneInput"></a>

```python
primary_edge_zone_input: str
```

- *Type:* str

---

##### `primary_zone_input`<sup>Optional</sup> <a name="primary_zone_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryZoneInput"></a>

```python
primary_zone_input: str
```

- *Type:* str

---

##### `recovery_edge_zone_input`<sup>Optional</sup> <a name="recovery_edge_zone_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryEdgeZoneInput"></a>

```python
recovery_edge_zone_input: str
```

- *Type:* str

---

##### `recovery_zone_input`<sup>Optional</sup> <a name="recovery_zone_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryZoneInput"></a>

```python
recovery_zone_input: str
```

- *Type:* str

---

##### `primary_edge_zone`<sup>Required</sup> <a name="primary_edge_zone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryEdgeZone"></a>

```python
primary_edge_zone: str
```

- *Type:* str

---

##### `primary_zone`<sup>Required</sup> <a name="primary_zone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryZone"></a>

```python
primary_zone: str
```

- *Type:* str

---

##### `recovery_edge_zone`<sup>Required</sup> <a name="recovery_edge_zone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryEdgeZone"></a>

```python
recovery_edge_zone: str
```

- *Type:* str

---

##### `recovery_zone`<sup>Required</sup> <a name="recovery_zone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryZone"></a>

```python
recovery_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.internalValue"></a>

```python
internal_value: SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings">SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings</a>

---


### SiteRecoveryReplicationRecoveryPlanRecoveryGroupList <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupList" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_replication_recovery_plan

siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SiteRecoveryReplicationRecoveryPlanRecoveryGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>]]

---


### SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_replication_recovery_plan

siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.putPostAction">put_post_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.putPreAction">put_pre_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resetPostAction">reset_post_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resetPreAction">reset_pre_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resetReplicatedProtectedItems">reset_replicated_protected_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_post_action` <a name="put_post_action" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.putPostAction"></a>

```python
def put_post_action(
  value: typing.Union[IResolvable, typing.List[SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.putPostAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a>]]

---

##### `put_pre_action` <a name="put_pre_action" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.putPreAction"></a>

```python
def put_pre_action(
  value: typing.Union[IResolvable, typing.List[SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.putPreAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a>]]

---

##### `reset_post_action` <a name="reset_post_action" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resetPostAction"></a>

```python
def reset_post_action() -> None
```

##### `reset_pre_action` <a name="reset_pre_action" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resetPreAction"></a>

```python
def reset_pre_action() -> None
```

##### `reset_replicated_protected_items` <a name="reset_replicated_protected_items" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resetReplicatedProtectedItems"></a>

```python
def reset_replicated_protected_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.postAction">post_action</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.preAction">pre_action</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.postActionInput">post_action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.preActionInput">pre_action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.replicatedProtectedItemsInput">replicated_protected_items_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.replicatedProtectedItems">replicated_protected_items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `post_action`<sup>Required</sup> <a name="post_action" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.postAction"></a>

```python
post_action: SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList</a>

---

##### `pre_action`<sup>Required</sup> <a name="pre_action" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.preAction"></a>

```python
pre_action: SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList</a>

---

##### `post_action_input`<sup>Optional</sup> <a name="post_action_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.postActionInput"></a>

```python
post_action_input: typing.Union[IResolvable, typing.List[SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a>]]

---

##### `pre_action_input`<sup>Optional</sup> <a name="pre_action_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.preActionInput"></a>

```python
pre_action_input: typing.Union[IResolvable, typing.List[SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a>]]

---

##### `replicated_protected_items_input`<sup>Optional</sup> <a name="replicated_protected_items_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.replicatedProtectedItemsInput"></a>

```python
replicated_protected_items_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `replicated_protected_items`<sup>Required</sup> <a name="replicated_protected_items" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.replicatedProtectedItems"></a>

```python
replicated_protected_items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SiteRecoveryReplicationRecoveryPlanRecoveryGroup]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup">SiteRecoveryReplicationRecoveryPlanRecoveryGroup</a>]

---


### SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_replication_recovery_plan

siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a>]]

---


### SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_replication_recovery_plan

siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetFabricLocation">reset_fabric_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetManualActionInstruction">reset_manual_action_instruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetRunbookId">reset_runbook_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetScriptPath">reset_script_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fabric_location` <a name="reset_fabric_location" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetFabricLocation"></a>

```python
def reset_fabric_location() -> None
```

##### `reset_manual_action_instruction` <a name="reset_manual_action_instruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetManualActionInstruction"></a>

```python
def reset_manual_action_instruction() -> None
```

##### `reset_runbook_id` <a name="reset_runbook_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetRunbookId"></a>

```python
def reset_runbook_id() -> None
```

##### `reset_script_path` <a name="reset_script_path" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetScriptPath"></a>

```python
def reset_script_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fabricLocationInput">fabric_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverDirectionsInput">fail_over_directions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverTypesInput">fail_over_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.manualActionInstructionInput">manual_action_instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.runbookIdInput">runbook_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.scriptPathInput">script_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fabricLocation">fabric_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverDirections">fail_over_directions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverTypes">fail_over_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.manualActionInstruction">manual_action_instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.runbookId">runbook_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.scriptPath">script_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fabric_location_input`<sup>Optional</sup> <a name="fabric_location_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fabricLocationInput"></a>

```python
fabric_location_input: str
```

- *Type:* str

---

##### `fail_over_directions_input`<sup>Optional</sup> <a name="fail_over_directions_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverDirectionsInput"></a>

```python
fail_over_directions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fail_over_types_input`<sup>Optional</sup> <a name="fail_over_types_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverTypesInput"></a>

```python
fail_over_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `manual_action_instruction_input`<sup>Optional</sup> <a name="manual_action_instruction_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.manualActionInstructionInput"></a>

```python
manual_action_instruction_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `runbook_id_input`<sup>Optional</sup> <a name="runbook_id_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.runbookIdInput"></a>

```python
runbook_id_input: str
```

- *Type:* str

---

##### `script_path_input`<sup>Optional</sup> <a name="script_path_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.scriptPathInput"></a>

```python
script_path_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `fabric_location`<sup>Required</sup> <a name="fabric_location" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fabricLocation"></a>

```python
fabric_location: str
```

- *Type:* str

---

##### `fail_over_directions`<sup>Required</sup> <a name="fail_over_directions" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverDirections"></a>

```python
fail_over_directions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fail_over_types`<sup>Required</sup> <a name="fail_over_types" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverTypes"></a>

```python
fail_over_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `manual_action_instruction`<sup>Required</sup> <a name="manual_action_instruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.manualActionInstruction"></a>

```python
manual_action_instruction: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `runbook_id`<sup>Required</sup> <a name="runbook_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.runbookId"></a>

```python
runbook_id: str
```

- *Type:* str

---

##### `script_path`<sup>Required</sup> <a name="script_path" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.scriptPath"></a>

```python
script_path: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction</a>]

---


### SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_replication_recovery_plan

siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a>]]

---


### SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_replication_recovery_plan

siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetFabricLocation">reset_fabric_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetManualActionInstruction">reset_manual_action_instruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetRunbookId">reset_runbook_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetScriptPath">reset_script_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fabric_location` <a name="reset_fabric_location" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetFabricLocation"></a>

```python
def reset_fabric_location() -> None
```

##### `reset_manual_action_instruction` <a name="reset_manual_action_instruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetManualActionInstruction"></a>

```python
def reset_manual_action_instruction() -> None
```

##### `reset_runbook_id` <a name="reset_runbook_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetRunbookId"></a>

```python
def reset_runbook_id() -> None
```

##### `reset_script_path` <a name="reset_script_path" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetScriptPath"></a>

```python
def reset_script_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fabricLocationInput">fabric_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverDirectionsInput">fail_over_directions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverTypesInput">fail_over_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.manualActionInstructionInput">manual_action_instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.runbookIdInput">runbook_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.scriptPathInput">script_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fabricLocation">fabric_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverDirections">fail_over_directions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverTypes">fail_over_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.manualActionInstruction">manual_action_instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.runbookId">runbook_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.scriptPath">script_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fabric_location_input`<sup>Optional</sup> <a name="fabric_location_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fabricLocationInput"></a>

```python
fabric_location_input: str
```

- *Type:* str

---

##### `fail_over_directions_input`<sup>Optional</sup> <a name="fail_over_directions_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverDirectionsInput"></a>

```python
fail_over_directions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fail_over_types_input`<sup>Optional</sup> <a name="fail_over_types_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverTypesInput"></a>

```python
fail_over_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `manual_action_instruction_input`<sup>Optional</sup> <a name="manual_action_instruction_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.manualActionInstructionInput"></a>

```python
manual_action_instruction_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `runbook_id_input`<sup>Optional</sup> <a name="runbook_id_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.runbookIdInput"></a>

```python
runbook_id_input: str
```

- *Type:* str

---

##### `script_path_input`<sup>Optional</sup> <a name="script_path_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.scriptPathInput"></a>

```python
script_path_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `fabric_location`<sup>Required</sup> <a name="fabric_location" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fabricLocation"></a>

```python
fabric_location: str
```

- *Type:* str

---

##### `fail_over_directions`<sup>Required</sup> <a name="fail_over_directions" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverDirections"></a>

```python
fail_over_directions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fail_over_types`<sup>Required</sup> <a name="fail_over_types" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverTypes"></a>

```python
fail_over_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `manual_action_instruction`<sup>Required</sup> <a name="manual_action_instruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.manualActionInstruction"></a>

```python
manual_action_instruction: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `runbook_id`<sup>Required</sup> <a name="runbook_id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.runbookId"></a>

```python
runbook_id: str
```

- *Type:* str

---

##### `script_path`<sup>Required</sup> <a name="script_path" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.scriptPath"></a>

```python
script_path: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction</a>]

---


### SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference <a name="SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_replication_recovery_plan

siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SiteRecoveryReplicationRecoveryPlanTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a>]

---



