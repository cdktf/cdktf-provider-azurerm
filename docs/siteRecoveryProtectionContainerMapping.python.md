# `siteRecoveryProtectionContainerMapping` Submodule <a name="`siteRecoveryProtectionContainerMapping` Submodule" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryProtectionContainerMapping <a name="SiteRecoveryProtectionContainerMapping" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping azurerm_site_recovery_protection_container_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_protection_container_mapping

siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping(
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
  recovery_fabric_name: str,
  recovery_replication_policy_id: str,
  recovery_source_protection_container_name: str,
  recovery_target_protection_container_id: str,
  recovery_vault_name: str,
  resource_group_name: str,
  automatic_update: SiteRecoveryProtectionContainerMappingAutomaticUpdate = None,
  id: str = None,
  timeouts: SiteRecoveryProtectionContainerMappingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#name SiteRecoveryProtectionContainerMapping#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoveryFabricName">recovery_fabric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_fabric_name SiteRecoveryProtectionContainerMapping#recovery_fabric_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoveryReplicationPolicyId">recovery_replication_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_replication_policy_id SiteRecoveryProtectionContainerMapping#recovery_replication_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoverySourceProtectionContainerName">recovery_source_protection_container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_source_protection_container_name SiteRecoveryProtectionContainerMapping#recovery_source_protection_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoveryTargetProtectionContainerId">recovery_target_protection_container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_target_protection_container_id SiteRecoveryProtectionContainerMapping#recovery_target_protection_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_vault_name SiteRecoveryProtectionContainerMapping#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#resource_group_name SiteRecoveryProtectionContainerMapping#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.automaticUpdate">automatic_update</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a></code> | automatic_update block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#id SiteRecoveryProtectionContainerMapping#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#name SiteRecoveryProtectionContainerMapping#name}.

---

##### `recovery_fabric_name`<sup>Required</sup> <a name="recovery_fabric_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoveryFabricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_fabric_name SiteRecoveryProtectionContainerMapping#recovery_fabric_name}.

---

##### `recovery_replication_policy_id`<sup>Required</sup> <a name="recovery_replication_policy_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoveryReplicationPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_replication_policy_id SiteRecoveryProtectionContainerMapping#recovery_replication_policy_id}.

---

##### `recovery_source_protection_container_name`<sup>Required</sup> <a name="recovery_source_protection_container_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoverySourceProtectionContainerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_source_protection_container_name SiteRecoveryProtectionContainerMapping#recovery_source_protection_container_name}.

---

##### `recovery_target_protection_container_id`<sup>Required</sup> <a name="recovery_target_protection_container_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoveryTargetProtectionContainerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_target_protection_container_id SiteRecoveryProtectionContainerMapping#recovery_target_protection_container_id}.

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.recoveryVaultName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_vault_name SiteRecoveryProtectionContainerMapping#recovery_vault_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#resource_group_name SiteRecoveryProtectionContainerMapping#resource_group_name}.

---

##### `automatic_update`<sup>Optional</sup> <a name="automatic_update" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.automaticUpdate"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a>

automatic_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#automatic_update SiteRecoveryProtectionContainerMapping#automatic_update}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#id SiteRecoveryProtectionContainerMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#timeouts SiteRecoveryProtectionContainerMapping#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putAutomaticUpdate">put_automatic_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetAutomaticUpdate">reset_automatic_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_automatic_update` <a name="put_automatic_update" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putAutomaticUpdate"></a>

```python
def put_automatic_update(
  authentication_type: str = None,
  automation_account_id: str = None,
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putAutomaticUpdate.parameter.authenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#authentication_type SiteRecoveryProtectionContainerMapping#authentication_type}.

---

###### `automation_account_id`<sup>Optional</sup> <a name="automation_account_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putAutomaticUpdate.parameter.automationAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#automation_account_id SiteRecoveryProtectionContainerMapping#automation_account_id}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putAutomaticUpdate.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#enabled SiteRecoveryProtectionContainerMapping#enabled}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#create SiteRecoveryProtectionContainerMapping#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#delete SiteRecoveryProtectionContainerMapping#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#read SiteRecoveryProtectionContainerMapping#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#update SiteRecoveryProtectionContainerMapping#update}.

---

##### `reset_automatic_update` <a name="reset_automatic_update" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetAutomaticUpdate"></a>

```python
def reset_automatic_update() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SiteRecoveryProtectionContainerMapping resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_protection_container_mapping

siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_protection_container_mapping

siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_protection_container_mapping

siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_protection_container_mapping

siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SiteRecoveryProtectionContainerMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SiteRecoveryProtectionContainerMapping to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SiteRecoveryProtectionContainerMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SiteRecoveryProtectionContainerMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.automaticUpdate">automatic_update</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference">SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference">SiteRecoveryProtectionContainerMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.automaticUpdateInput">automatic_update_input</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryFabricNameInput">recovery_fabric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryReplicationPolicyIdInput">recovery_replication_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoverySourceProtectionContainerNameInput">recovery_source_protection_container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryTargetProtectionContainerIdInput">recovery_target_protection_container_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryVaultNameInput">recovery_vault_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryFabricName">recovery_fabric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryReplicationPolicyId">recovery_replication_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoverySourceProtectionContainerName">recovery_source_protection_container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryTargetProtectionContainerId">recovery_target_protection_container_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `automatic_update`<sup>Required</sup> <a name="automatic_update" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.automaticUpdate"></a>

```python
automatic_update: SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference">SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.timeouts"></a>

```python
timeouts: SiteRecoveryProtectionContainerMappingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference">SiteRecoveryProtectionContainerMappingTimeoutsOutputReference</a>

---

##### `automatic_update_input`<sup>Optional</sup> <a name="automatic_update_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.automaticUpdateInput"></a>

```python
automatic_update_input: SiteRecoveryProtectionContainerMappingAutomaticUpdate
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recovery_fabric_name_input`<sup>Optional</sup> <a name="recovery_fabric_name_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryFabricNameInput"></a>

```python
recovery_fabric_name_input: str
```

- *Type:* str

---

##### `recovery_replication_policy_id_input`<sup>Optional</sup> <a name="recovery_replication_policy_id_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryReplicationPolicyIdInput"></a>

```python
recovery_replication_policy_id_input: str
```

- *Type:* str

---

##### `recovery_source_protection_container_name_input`<sup>Optional</sup> <a name="recovery_source_protection_container_name_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoverySourceProtectionContainerNameInput"></a>

```python
recovery_source_protection_container_name_input: str
```

- *Type:* str

---

##### `recovery_target_protection_container_id_input`<sup>Optional</sup> <a name="recovery_target_protection_container_id_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryTargetProtectionContainerIdInput"></a>

```python
recovery_target_protection_container_id_input: str
```

- *Type:* str

---

##### `recovery_vault_name_input`<sup>Optional</sup> <a name="recovery_vault_name_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryVaultNameInput"></a>

```python
recovery_vault_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SiteRecoveryProtectionContainerMappingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recovery_fabric_name`<sup>Required</sup> <a name="recovery_fabric_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryFabricName"></a>

```python
recovery_fabric_name: str
```

- *Type:* str

---

##### `recovery_replication_policy_id`<sup>Required</sup> <a name="recovery_replication_policy_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryReplicationPolicyId"></a>

```python
recovery_replication_policy_id: str
```

- *Type:* str

---

##### `recovery_source_protection_container_name`<sup>Required</sup> <a name="recovery_source_protection_container_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoverySourceProtectionContainerName"></a>

```python
recovery_source_protection_container_name: str
```

- *Type:* str

---

##### `recovery_target_protection_container_id`<sup>Required</sup> <a name="recovery_target_protection_container_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryTargetProtectionContainerId"></a>

```python
recovery_target_protection_container_id: str
```

- *Type:* str

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryVaultName"></a>

```python
recovery_vault_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryProtectionContainerMappingAutomaticUpdate <a name="SiteRecoveryProtectionContainerMappingAutomaticUpdate" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_protection_container_mapping

siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate(
  authentication_type: str = None,
  automation_account_id: str = None,
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.property.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#authentication_type SiteRecoveryProtectionContainerMapping#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.property.automationAccountId">automation_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#automation_account_id SiteRecoveryProtectionContainerMapping#automation_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#enabled SiteRecoveryProtectionContainerMapping#enabled}. |

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#authentication_type SiteRecoveryProtectionContainerMapping#authentication_type}.

---

##### `automation_account_id`<sup>Optional</sup> <a name="automation_account_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.property.automationAccountId"></a>

```python
automation_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#automation_account_id SiteRecoveryProtectionContainerMapping#automation_account_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#enabled SiteRecoveryProtectionContainerMapping#enabled}.

---

### SiteRecoveryProtectionContainerMappingConfig <a name="SiteRecoveryProtectionContainerMappingConfig" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_protection_container_mapping

siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  recovery_fabric_name: str,
  recovery_replication_policy_id: str,
  recovery_source_protection_container_name: str,
  recovery_target_protection_container_id: str,
  recovery_vault_name: str,
  resource_group_name: str,
  automatic_update: SiteRecoveryProtectionContainerMappingAutomaticUpdate = None,
  id: str = None,
  timeouts: SiteRecoveryProtectionContainerMappingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#name SiteRecoveryProtectionContainerMapping#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryFabricName">recovery_fabric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_fabric_name SiteRecoveryProtectionContainerMapping#recovery_fabric_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryReplicationPolicyId">recovery_replication_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_replication_policy_id SiteRecoveryProtectionContainerMapping#recovery_replication_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoverySourceProtectionContainerName">recovery_source_protection_container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_source_protection_container_name SiteRecoveryProtectionContainerMapping#recovery_source_protection_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryTargetProtectionContainerId">recovery_target_protection_container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_target_protection_container_id SiteRecoveryProtectionContainerMapping#recovery_target_protection_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_vault_name SiteRecoveryProtectionContainerMapping#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#resource_group_name SiteRecoveryProtectionContainerMapping#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.automaticUpdate">automatic_update</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a></code> | automatic_update block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#id SiteRecoveryProtectionContainerMapping#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#name SiteRecoveryProtectionContainerMapping#name}.

---

##### `recovery_fabric_name`<sup>Required</sup> <a name="recovery_fabric_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryFabricName"></a>

```python
recovery_fabric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_fabric_name SiteRecoveryProtectionContainerMapping#recovery_fabric_name}.

---

##### `recovery_replication_policy_id`<sup>Required</sup> <a name="recovery_replication_policy_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryReplicationPolicyId"></a>

```python
recovery_replication_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_replication_policy_id SiteRecoveryProtectionContainerMapping#recovery_replication_policy_id}.

---

##### `recovery_source_protection_container_name`<sup>Required</sup> <a name="recovery_source_protection_container_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoverySourceProtectionContainerName"></a>

```python
recovery_source_protection_container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_source_protection_container_name SiteRecoveryProtectionContainerMapping#recovery_source_protection_container_name}.

---

##### `recovery_target_protection_container_id`<sup>Required</sup> <a name="recovery_target_protection_container_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryTargetProtectionContainerId"></a>

```python
recovery_target_protection_container_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_target_protection_container_id SiteRecoveryProtectionContainerMapping#recovery_target_protection_container_id}.

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryVaultName"></a>

```python
recovery_vault_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#recovery_vault_name SiteRecoveryProtectionContainerMapping#recovery_vault_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#resource_group_name SiteRecoveryProtectionContainerMapping#resource_group_name}.

---

##### `automatic_update`<sup>Optional</sup> <a name="automatic_update" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.automaticUpdate"></a>

```python
automatic_update: SiteRecoveryProtectionContainerMappingAutomaticUpdate
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a>

automatic_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#automatic_update SiteRecoveryProtectionContainerMapping#automatic_update}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#id SiteRecoveryProtectionContainerMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.timeouts"></a>

```python
timeouts: SiteRecoveryProtectionContainerMappingTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#timeouts SiteRecoveryProtectionContainerMapping#timeouts}

---

### SiteRecoveryProtectionContainerMappingTimeouts <a name="SiteRecoveryProtectionContainerMappingTimeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_protection_container_mapping

siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#create SiteRecoveryProtectionContainerMapping#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#delete SiteRecoveryProtectionContainerMapping#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#read SiteRecoveryProtectionContainerMapping#read}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#update SiteRecoveryProtectionContainerMapping#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#create SiteRecoveryProtectionContainerMapping#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#delete SiteRecoveryProtectionContainerMapping#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#read SiteRecoveryProtectionContainerMapping#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/site_recovery_protection_container_mapping#update SiteRecoveryProtectionContainerMapping#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference <a name="SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_protection_container_mapping

siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resetAuthenticationType">reset_authentication_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resetAutomationAccountId">reset_automation_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authentication_type` <a name="reset_authentication_type" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resetAuthenticationType"></a>

```python
def reset_authentication_type() -> None
```

##### `reset_automation_account_id` <a name="reset_automation_account_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resetAutomationAccountId"></a>

```python
def reset_automation_account_id() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.automationAccountIdInput">automation_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.automationAccountId">automation_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `automation_account_id_input`<sup>Optional</sup> <a name="automation_account_id_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.automationAccountIdInput"></a>

```python
automation_account_id_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `automation_account_id`<sup>Required</sup> <a name="automation_account_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.automationAccountId"></a>

```python
automation_account_id: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.internalValue"></a>

```python
internal_value: SiteRecoveryProtectionContainerMappingAutomaticUpdate
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a>

---


### SiteRecoveryProtectionContainerMappingTimeoutsOutputReference <a name="SiteRecoveryProtectionContainerMappingTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_protection_container_mapping

siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SiteRecoveryProtectionContainerMappingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a>]

---



