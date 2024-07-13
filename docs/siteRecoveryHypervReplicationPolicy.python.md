# `siteRecoveryHypervReplicationPolicy` Submodule <a name="`siteRecoveryHypervReplicationPolicy` Submodule" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryHypervReplicationPolicy <a name="SiteRecoveryHypervReplicationPolicy" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy azurerm_site_recovery_hyperv_replication_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_hyperv_replication_policy

siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_consistent_snapshot_frequency_in_hours: typing.Union[int, float],
  name: str,
  recovery_point_retention_in_hours: typing.Union[int, float],
  recovery_vault_id: str,
  replication_interval_in_seconds: typing.Union[int, float],
  id: str = None,
  timeouts: SiteRecoveryHypervReplicationPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.applicationConsistentSnapshotFrequencyInHours">application_consistent_snapshot_frequency_in_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#application_consistent_snapshot_frequency_in_hours SiteRecoveryHypervReplicationPolicy#application_consistent_snapshot_frequency_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#name SiteRecoveryHypervReplicationPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.recoveryPointRetentionInHours">recovery_point_retention_in_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_point_retention_in_hours SiteRecoveryHypervReplicationPolicy#recovery_point_retention_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.recoveryVaultId">recovery_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_vault_id SiteRecoveryHypervReplicationPolicy#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.replicationIntervalInSeconds">replication_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#replication_interval_in_seconds SiteRecoveryHypervReplicationPolicy#replication_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#id SiteRecoveryHypervReplicationPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_consistent_snapshot_frequency_in_hours`<sup>Required</sup> <a name="application_consistent_snapshot_frequency_in_hours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.applicationConsistentSnapshotFrequencyInHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#application_consistent_snapshot_frequency_in_hours SiteRecoveryHypervReplicationPolicy#application_consistent_snapshot_frequency_in_hours}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#name SiteRecoveryHypervReplicationPolicy#name}.

---

##### `recovery_point_retention_in_hours`<sup>Required</sup> <a name="recovery_point_retention_in_hours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.recoveryPointRetentionInHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_point_retention_in_hours SiteRecoveryHypervReplicationPolicy#recovery_point_retention_in_hours}.

---

##### `recovery_vault_id`<sup>Required</sup> <a name="recovery_vault_id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.recoveryVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_vault_id SiteRecoveryHypervReplicationPolicy#recovery_vault_id}.

---

##### `replication_interval_in_seconds`<sup>Required</sup> <a name="replication_interval_in_seconds" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.replicationIntervalInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#replication_interval_in_seconds SiteRecoveryHypervReplicationPolicy#replication_interval_in_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#id SiteRecoveryHypervReplicationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#timeouts SiteRecoveryHypervReplicationPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#create SiteRecoveryHypervReplicationPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#delete SiteRecoveryHypervReplicationPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#read SiteRecoveryHypervReplicationPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#update SiteRecoveryHypervReplicationPolicy#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SiteRecoveryHypervReplicationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_hyperv_replication_policy

siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_hyperv_replication_policy

siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_hyperv_replication_policy

siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_hyperv_replication_policy

siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SiteRecoveryHypervReplicationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SiteRecoveryHypervReplicationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SiteRecoveryHypervReplicationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SiteRecoveryHypervReplicationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference">SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.applicationConsistentSnapshotFrequencyInHoursInput">application_consistent_snapshot_frequency_in_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryPointRetentionInHoursInput">recovery_point_retention_in_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryVaultIdInput">recovery_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.replicationIntervalInSecondsInput">replication_interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.applicationConsistentSnapshotFrequencyInHours">application_consistent_snapshot_frequency_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryPointRetentionInHours">recovery_point_retention_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryVaultId">recovery_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.replicationIntervalInSeconds">replication_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.timeouts"></a>

```python
timeouts: SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference">SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference</a>

---

##### `application_consistent_snapshot_frequency_in_hours_input`<sup>Optional</sup> <a name="application_consistent_snapshot_frequency_in_hours_input" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.applicationConsistentSnapshotFrequencyInHoursInput"></a>

```python
application_consistent_snapshot_frequency_in_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recovery_point_retention_in_hours_input`<sup>Optional</sup> <a name="recovery_point_retention_in_hours_input" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryPointRetentionInHoursInput"></a>

```python
recovery_point_retention_in_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recovery_vault_id_input`<sup>Optional</sup> <a name="recovery_vault_id_input" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryVaultIdInput"></a>

```python
recovery_vault_id_input: str
```

- *Type:* str

---

##### `replication_interval_in_seconds_input`<sup>Optional</sup> <a name="replication_interval_in_seconds_input" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.replicationIntervalInSecondsInput"></a>

```python
replication_interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SiteRecoveryHypervReplicationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a>]

---

##### `application_consistent_snapshot_frequency_in_hours`<sup>Required</sup> <a name="application_consistent_snapshot_frequency_in_hours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.applicationConsistentSnapshotFrequencyInHours"></a>

```python
application_consistent_snapshot_frequency_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recovery_point_retention_in_hours`<sup>Required</sup> <a name="recovery_point_retention_in_hours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryPointRetentionInHours"></a>

```python
recovery_point_retention_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recovery_vault_id`<sup>Required</sup> <a name="recovery_vault_id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.recoveryVaultId"></a>

```python
recovery_vault_id: str
```

- *Type:* str

---

##### `replication_interval_in_seconds`<sup>Required</sup> <a name="replication_interval_in_seconds" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.replicationIntervalInSeconds"></a>

```python
replication_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryHypervReplicationPolicyConfig <a name="SiteRecoveryHypervReplicationPolicyConfig" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_hyperv_replication_policy

siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_consistent_snapshot_frequency_in_hours: typing.Union[int, float],
  name: str,
  recovery_point_retention_in_hours: typing.Union[int, float],
  recovery_vault_id: str,
  replication_interval_in_seconds: typing.Union[int, float],
  id: str = None,
  timeouts: SiteRecoveryHypervReplicationPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.applicationConsistentSnapshotFrequencyInHours">application_consistent_snapshot_frequency_in_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#application_consistent_snapshot_frequency_in_hours SiteRecoveryHypervReplicationPolicy#application_consistent_snapshot_frequency_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#name SiteRecoveryHypervReplicationPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.recoveryPointRetentionInHours">recovery_point_retention_in_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_point_retention_in_hours SiteRecoveryHypervReplicationPolicy#recovery_point_retention_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.recoveryVaultId">recovery_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_vault_id SiteRecoveryHypervReplicationPolicy#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.replicationIntervalInSeconds">replication_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#replication_interval_in_seconds SiteRecoveryHypervReplicationPolicy#replication_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#id SiteRecoveryHypervReplicationPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_consistent_snapshot_frequency_in_hours`<sup>Required</sup> <a name="application_consistent_snapshot_frequency_in_hours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.applicationConsistentSnapshotFrequencyInHours"></a>

```python
application_consistent_snapshot_frequency_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#application_consistent_snapshot_frequency_in_hours SiteRecoveryHypervReplicationPolicy#application_consistent_snapshot_frequency_in_hours}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#name SiteRecoveryHypervReplicationPolicy#name}.

---

##### `recovery_point_retention_in_hours`<sup>Required</sup> <a name="recovery_point_retention_in_hours" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.recoveryPointRetentionInHours"></a>

```python
recovery_point_retention_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_point_retention_in_hours SiteRecoveryHypervReplicationPolicy#recovery_point_retention_in_hours}.

---

##### `recovery_vault_id`<sup>Required</sup> <a name="recovery_vault_id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.recoveryVaultId"></a>

```python
recovery_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#recovery_vault_id SiteRecoveryHypervReplicationPolicy#recovery_vault_id}.

---

##### `replication_interval_in_seconds`<sup>Required</sup> <a name="replication_interval_in_seconds" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.replicationIntervalInSeconds"></a>

```python
replication_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#replication_interval_in_seconds SiteRecoveryHypervReplicationPolicy#replication_interval_in_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#id SiteRecoveryHypervReplicationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyConfig.property.timeouts"></a>

```python
timeouts: SiteRecoveryHypervReplicationPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#timeouts SiteRecoveryHypervReplicationPolicy#timeouts}

---

### SiteRecoveryHypervReplicationPolicyTimeouts <a name="SiteRecoveryHypervReplicationPolicyTimeouts" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_hyperv_replication_policy

siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#create SiteRecoveryHypervReplicationPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#delete SiteRecoveryHypervReplicationPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#read SiteRecoveryHypervReplicationPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#update SiteRecoveryHypervReplicationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#create SiteRecoveryHypervReplicationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#delete SiteRecoveryHypervReplicationPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#read SiteRecoveryHypervReplicationPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/site_recovery_hyperv_replication_policy#update SiteRecoveryHypervReplicationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference <a name="SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_hyperv_replication_policy

siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SiteRecoveryHypervReplicationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryHypervReplicationPolicy.SiteRecoveryHypervReplicationPolicyTimeouts">SiteRecoveryHypervReplicationPolicyTimeouts</a>]

---



