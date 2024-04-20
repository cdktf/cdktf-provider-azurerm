# `logAnalyticsWorkspace` Submodule <a name="`logAnalyticsWorkspace` Submodule" id="@cdktf/provider-azurerm.logAnalyticsWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsWorkspace <a name="LogAnalyticsWorkspace" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace azurerm_log_analytics_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_workspace

logAnalyticsWorkspace.LogAnalyticsWorkspace(
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
  allow_resource_only_permissions: typing.Union[bool, IResolvable] = None,
  cmk_for_query_forced: typing.Union[bool, IResolvable] = None,
  daily_quota_gb: typing.Union[int, float] = None,
  data_collection_rule_id: str = None,
  id: str = None,
  identity: LogAnalyticsWorkspaceIdentity = None,
  immediate_data_purge_on30_days_enabled: typing.Union[bool, IResolvable] = None,
  internet_ingestion_enabled: typing.Union[bool, IResolvable] = None,
  internet_query_enabled: typing.Union[bool, IResolvable] = None,
  local_authentication_disabled: typing.Union[bool, IResolvable] = None,
  reservation_capacity_in_gb_per_day: typing.Union[int, float] = None,
  retention_in_days: typing.Union[int, float] = None,
  sku: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: LogAnalyticsWorkspaceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#location LogAnalyticsWorkspace#location}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#name LogAnalyticsWorkspace#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#resource_group_name LogAnalyticsWorkspace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.allowResourceOnlyPermissions">allow_resource_only_permissions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#allow_resource_only_permissions LogAnalyticsWorkspace#allow_resource_only_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.cmkForQueryForced">cmk_for_query_forced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#cmk_for_query_forced LogAnalyticsWorkspace#cmk_for_query_forced}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.dailyQuotaGb">daily_quota_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#daily_quota_gb LogAnalyticsWorkspace#daily_quota_gb}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.dataCollectionRuleId">data_collection_rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#data_collection_rule_id LogAnalyticsWorkspace#data_collection_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#id LogAnalyticsWorkspace#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity">LogAnalyticsWorkspaceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.immediateDataPurgeOn30DaysEnabled">immediate_data_purge_on30_days_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#immediate_data_purge_on_30_days_enabled LogAnalyticsWorkspace#immediate_data_purge_on_30_days_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.internetIngestionEnabled">internet_ingestion_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#internet_ingestion_enabled LogAnalyticsWorkspace#internet_ingestion_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.internetQueryEnabled">internet_query_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#internet_query_enabled LogAnalyticsWorkspace#internet_query_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.localAuthenticationDisabled">local_authentication_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#local_authentication_disabled LogAnalyticsWorkspace#local_authentication_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.reservationCapacityInGbPerDay">reservation_capacity_in_gb_per_day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#reservation_capacity_in_gb_per_day LogAnalyticsWorkspace#reservation_capacity_in_gb_per_day}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#retention_in_days LogAnalyticsWorkspace#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#sku LogAnalyticsWorkspace#sku}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#tags LogAnalyticsWorkspace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts">LogAnalyticsWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#location LogAnalyticsWorkspace#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#name LogAnalyticsWorkspace#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#resource_group_name LogAnalyticsWorkspace#resource_group_name}.

---

##### `allow_resource_only_permissions`<sup>Optional</sup> <a name="allow_resource_only_permissions" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.allowResourceOnlyPermissions"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#allow_resource_only_permissions LogAnalyticsWorkspace#allow_resource_only_permissions}.

---

##### `cmk_for_query_forced`<sup>Optional</sup> <a name="cmk_for_query_forced" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.cmkForQueryForced"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#cmk_for_query_forced LogAnalyticsWorkspace#cmk_for_query_forced}.

---

##### `daily_quota_gb`<sup>Optional</sup> <a name="daily_quota_gb" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.dailyQuotaGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#daily_quota_gb LogAnalyticsWorkspace#daily_quota_gb}.

---

##### `data_collection_rule_id`<sup>Optional</sup> <a name="data_collection_rule_id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.dataCollectionRuleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#data_collection_rule_id LogAnalyticsWorkspace#data_collection_rule_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#id LogAnalyticsWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity">LogAnalyticsWorkspaceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#identity LogAnalyticsWorkspace#identity}

---

##### `immediate_data_purge_on30_days_enabled`<sup>Optional</sup> <a name="immediate_data_purge_on30_days_enabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.immediateDataPurgeOn30DaysEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#immediate_data_purge_on_30_days_enabled LogAnalyticsWorkspace#immediate_data_purge_on_30_days_enabled}.

---

##### `internet_ingestion_enabled`<sup>Optional</sup> <a name="internet_ingestion_enabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.internetIngestionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#internet_ingestion_enabled LogAnalyticsWorkspace#internet_ingestion_enabled}.

---

##### `internet_query_enabled`<sup>Optional</sup> <a name="internet_query_enabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.internetQueryEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#internet_query_enabled LogAnalyticsWorkspace#internet_query_enabled}.

---

##### `local_authentication_disabled`<sup>Optional</sup> <a name="local_authentication_disabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.localAuthenticationDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#local_authentication_disabled LogAnalyticsWorkspace#local_authentication_disabled}.

---

##### `reservation_capacity_in_gb_per_day`<sup>Optional</sup> <a name="reservation_capacity_in_gb_per_day" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.reservationCapacityInGbPerDay"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#reservation_capacity_in_gb_per_day LogAnalyticsWorkspace#reservation_capacity_in_gb_per_day}.

---

##### `retention_in_days`<sup>Optional</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.retentionInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#retention_in_days LogAnalyticsWorkspace#retention_in_days}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#sku LogAnalyticsWorkspace#sku}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#tags LogAnalyticsWorkspace#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts">LogAnalyticsWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#timeouts LogAnalyticsWorkspace#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetAllowResourceOnlyPermissions">reset_allow_resource_only_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetCmkForQueryForced">reset_cmk_for_query_forced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetDailyQuotaGb">reset_daily_quota_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetDataCollectionRuleId">reset_data_collection_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetImmediateDataPurgeOn30DaysEnabled">reset_immediate_data_purge_on30_days_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetInternetIngestionEnabled">reset_internet_ingestion_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetInternetQueryEnabled">reset_internet_query_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetLocalAuthenticationDisabled">reset_local_authentication_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetReservationCapacityInGbPerDay">reset_reservation_capacity_in_gb_per_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetRetentionInDays">reset_retention_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetSku">reset_sku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#type LogAnalyticsWorkspace#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#identity_ids LogAnalyticsWorkspace#identity_ids}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#create LogAnalyticsWorkspace#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#delete LogAnalyticsWorkspace#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#read LogAnalyticsWorkspace#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#update LogAnalyticsWorkspace#update}.

---

##### `reset_allow_resource_only_permissions` <a name="reset_allow_resource_only_permissions" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetAllowResourceOnlyPermissions"></a>

```python
def reset_allow_resource_only_permissions() -> None
```

##### `reset_cmk_for_query_forced` <a name="reset_cmk_for_query_forced" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetCmkForQueryForced"></a>

```python
def reset_cmk_for_query_forced() -> None
```

##### `reset_daily_quota_gb` <a name="reset_daily_quota_gb" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetDailyQuotaGb"></a>

```python
def reset_daily_quota_gb() -> None
```

##### `reset_data_collection_rule_id` <a name="reset_data_collection_rule_id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetDataCollectionRuleId"></a>

```python
def reset_data_collection_rule_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_immediate_data_purge_on30_days_enabled` <a name="reset_immediate_data_purge_on30_days_enabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetImmediateDataPurgeOn30DaysEnabled"></a>

```python
def reset_immediate_data_purge_on30_days_enabled() -> None
```

##### `reset_internet_ingestion_enabled` <a name="reset_internet_ingestion_enabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetInternetIngestionEnabled"></a>

```python
def reset_internet_ingestion_enabled() -> None
```

##### `reset_internet_query_enabled` <a name="reset_internet_query_enabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetInternetQueryEnabled"></a>

```python
def reset_internet_query_enabled() -> None
```

##### `reset_local_authentication_disabled` <a name="reset_local_authentication_disabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetLocalAuthenticationDisabled"></a>

```python
def reset_local_authentication_disabled() -> None
```

##### `reset_reservation_capacity_in_gb_per_day` <a name="reset_reservation_capacity_in_gb_per_day" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetReservationCapacityInGbPerDay"></a>

```python
def reset_reservation_capacity_in_gb_per_day() -> None
```

##### `reset_retention_in_days` <a name="reset_retention_in_days" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetRetentionInDays"></a>

```python
def reset_retention_in_days() -> None
```

##### `reset_sku` <a name="reset_sku" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetSku"></a>

```python
def reset_sku() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LogAnalyticsWorkspace resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_workspace

logAnalyticsWorkspace.LogAnalyticsWorkspace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_workspace

logAnalyticsWorkspace.LogAnalyticsWorkspace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_workspace

logAnalyticsWorkspace.LogAnalyticsWorkspace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_workspace

logAnalyticsWorkspace.LogAnalyticsWorkspace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LogAnalyticsWorkspace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogAnalyticsWorkspace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogAnalyticsWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference">LogAnalyticsWorkspaceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.primarySharedKey">primary_shared_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.secondarySharedKey">secondary_shared_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference">LogAnalyticsWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.allowResourceOnlyPermissionsInput">allow_resource_only_permissions_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.cmkForQueryForcedInput">cmk_for_query_forced_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dailyQuotaGbInput">daily_quota_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dataCollectionRuleIdInput">data_collection_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity">LogAnalyticsWorkspaceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.immediateDataPurgeOn30DaysEnabledInput">immediate_data_purge_on30_days_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetIngestionEnabledInput">internet_ingestion_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetQueryEnabledInput">internet_query_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.localAuthenticationDisabledInput">local_authentication_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.reservationCapacityInGbPerDayInput">reservation_capacity_in_gb_per_day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.retentionInDaysInput">retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts">LogAnalyticsWorkspaceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.allowResourceOnlyPermissions">allow_resource_only_permissions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.cmkForQueryForced">cmk_for_query_forced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dailyQuotaGb">daily_quota_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dataCollectionRuleId">data_collection_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.immediateDataPurgeOn30DaysEnabled">immediate_data_purge_on30_days_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetIngestionEnabled">internet_ingestion_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetQueryEnabled">internet_query_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.localAuthenticationDisabled">local_authentication_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.reservationCapacityInGbPerDay">reservation_capacity_in_gb_per_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.identity"></a>

```python
identity: LogAnalyticsWorkspaceIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference">LogAnalyticsWorkspaceIdentityOutputReference</a>

---

##### `primary_shared_key`<sup>Required</sup> <a name="primary_shared_key" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.primarySharedKey"></a>

```python
primary_shared_key: str
```

- *Type:* str

---

##### `secondary_shared_key`<sup>Required</sup> <a name="secondary_shared_key" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.secondarySharedKey"></a>

```python
secondary_shared_key: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.timeouts"></a>

```python
timeouts: LogAnalyticsWorkspaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference">LogAnalyticsWorkspaceTimeoutsOutputReference</a>

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `allow_resource_only_permissions_input`<sup>Optional</sup> <a name="allow_resource_only_permissions_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.allowResourceOnlyPermissionsInput"></a>

```python
allow_resource_only_permissions_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cmk_for_query_forced_input`<sup>Optional</sup> <a name="cmk_for_query_forced_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.cmkForQueryForcedInput"></a>

```python
cmk_for_query_forced_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `daily_quota_gb_input`<sup>Optional</sup> <a name="daily_quota_gb_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dailyQuotaGbInput"></a>

```python
daily_quota_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_collection_rule_id_input`<sup>Optional</sup> <a name="data_collection_rule_id_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dataCollectionRuleIdInput"></a>

```python
data_collection_rule_id_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.identityInput"></a>

```python
identity_input: LogAnalyticsWorkspaceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity">LogAnalyticsWorkspaceIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `immediate_data_purge_on30_days_enabled_input`<sup>Optional</sup> <a name="immediate_data_purge_on30_days_enabled_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.immediateDataPurgeOn30DaysEnabledInput"></a>

```python
immediate_data_purge_on30_days_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internet_ingestion_enabled_input`<sup>Optional</sup> <a name="internet_ingestion_enabled_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetIngestionEnabledInput"></a>

```python
internet_ingestion_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internet_query_enabled_input`<sup>Optional</sup> <a name="internet_query_enabled_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetQueryEnabledInput"></a>

```python
internet_query_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `local_authentication_disabled_input`<sup>Optional</sup> <a name="local_authentication_disabled_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.localAuthenticationDisabledInput"></a>

```python
local_authentication_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `reservation_capacity_in_gb_per_day_input`<sup>Optional</sup> <a name="reservation_capacity_in_gb_per_day_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.reservationCapacityInGbPerDayInput"></a>

```python
reservation_capacity_in_gb_per_day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `retention_in_days_input`<sup>Optional</sup> <a name="retention_in_days_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.retentionInDaysInput"></a>

```python
retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LogAnalyticsWorkspaceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts">LogAnalyticsWorkspaceTimeouts</a>]

---

##### `allow_resource_only_permissions`<sup>Required</sup> <a name="allow_resource_only_permissions" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.allowResourceOnlyPermissions"></a>

```python
allow_resource_only_permissions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cmk_for_query_forced`<sup>Required</sup> <a name="cmk_for_query_forced" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.cmkForQueryForced"></a>

```python
cmk_for_query_forced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `daily_quota_gb`<sup>Required</sup> <a name="daily_quota_gb" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dailyQuotaGb"></a>

```python
daily_quota_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_collection_rule_id`<sup>Required</sup> <a name="data_collection_rule_id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dataCollectionRuleId"></a>

```python
data_collection_rule_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `immediate_data_purge_on30_days_enabled`<sup>Required</sup> <a name="immediate_data_purge_on30_days_enabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.immediateDataPurgeOn30DaysEnabled"></a>

```python
immediate_data_purge_on30_days_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internet_ingestion_enabled`<sup>Required</sup> <a name="internet_ingestion_enabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetIngestionEnabled"></a>

```python
internet_ingestion_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internet_query_enabled`<sup>Required</sup> <a name="internet_query_enabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetQueryEnabled"></a>

```python
internet_query_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `local_authentication_disabled`<sup>Required</sup> <a name="local_authentication_disabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.localAuthenticationDisabled"></a>

```python
local_authentication_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reservation_capacity_in_gb_per_day`<sup>Required</sup> <a name="reservation_capacity_in_gb_per_day" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.reservationCapacityInGbPerDay"></a>

```python
reservation_capacity_in_gb_per_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsWorkspaceConfig <a name="LogAnalyticsWorkspaceConfig" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_workspace

logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig(
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
  allow_resource_only_permissions: typing.Union[bool, IResolvable] = None,
  cmk_for_query_forced: typing.Union[bool, IResolvable] = None,
  daily_quota_gb: typing.Union[int, float] = None,
  data_collection_rule_id: str = None,
  id: str = None,
  identity: LogAnalyticsWorkspaceIdentity = None,
  immediate_data_purge_on30_days_enabled: typing.Union[bool, IResolvable] = None,
  internet_ingestion_enabled: typing.Union[bool, IResolvable] = None,
  internet_query_enabled: typing.Union[bool, IResolvable] = None,
  local_authentication_disabled: typing.Union[bool, IResolvable] = None,
  reservation_capacity_in_gb_per_day: typing.Union[int, float] = None,
  retention_in_days: typing.Union[int, float] = None,
  sku: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: LogAnalyticsWorkspaceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#location LogAnalyticsWorkspace#location}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#name LogAnalyticsWorkspace#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#resource_group_name LogAnalyticsWorkspace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.allowResourceOnlyPermissions">allow_resource_only_permissions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#allow_resource_only_permissions LogAnalyticsWorkspace#allow_resource_only_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.cmkForQueryForced">cmk_for_query_forced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#cmk_for_query_forced LogAnalyticsWorkspace#cmk_for_query_forced}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.dailyQuotaGb">daily_quota_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#daily_quota_gb LogAnalyticsWorkspace#daily_quota_gb}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.dataCollectionRuleId">data_collection_rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#data_collection_rule_id LogAnalyticsWorkspace#data_collection_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#id LogAnalyticsWorkspace#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity">LogAnalyticsWorkspaceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.immediateDataPurgeOn30DaysEnabled">immediate_data_purge_on30_days_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#immediate_data_purge_on_30_days_enabled LogAnalyticsWorkspace#immediate_data_purge_on_30_days_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.internetIngestionEnabled">internet_ingestion_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#internet_ingestion_enabled LogAnalyticsWorkspace#internet_ingestion_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.internetQueryEnabled">internet_query_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#internet_query_enabled LogAnalyticsWorkspace#internet_query_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.localAuthenticationDisabled">local_authentication_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#local_authentication_disabled LogAnalyticsWorkspace#local_authentication_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.reservationCapacityInGbPerDay">reservation_capacity_in_gb_per_day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#reservation_capacity_in_gb_per_day LogAnalyticsWorkspace#reservation_capacity_in_gb_per_day}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#retention_in_days LogAnalyticsWorkspace#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#sku LogAnalyticsWorkspace#sku}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#tags LogAnalyticsWorkspace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts">LogAnalyticsWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#location LogAnalyticsWorkspace#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#name LogAnalyticsWorkspace#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#resource_group_name LogAnalyticsWorkspace#resource_group_name}.

---

##### `allow_resource_only_permissions`<sup>Optional</sup> <a name="allow_resource_only_permissions" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.allowResourceOnlyPermissions"></a>

```python
allow_resource_only_permissions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#allow_resource_only_permissions LogAnalyticsWorkspace#allow_resource_only_permissions}.

---

##### `cmk_for_query_forced`<sup>Optional</sup> <a name="cmk_for_query_forced" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.cmkForQueryForced"></a>

```python
cmk_for_query_forced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#cmk_for_query_forced LogAnalyticsWorkspace#cmk_for_query_forced}.

---

##### `daily_quota_gb`<sup>Optional</sup> <a name="daily_quota_gb" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.dailyQuotaGb"></a>

```python
daily_quota_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#daily_quota_gb LogAnalyticsWorkspace#daily_quota_gb}.

---

##### `data_collection_rule_id`<sup>Optional</sup> <a name="data_collection_rule_id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.dataCollectionRuleId"></a>

```python
data_collection_rule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#data_collection_rule_id LogAnalyticsWorkspace#data_collection_rule_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#id LogAnalyticsWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.identity"></a>

```python
identity: LogAnalyticsWorkspaceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity">LogAnalyticsWorkspaceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#identity LogAnalyticsWorkspace#identity}

---

##### `immediate_data_purge_on30_days_enabled`<sup>Optional</sup> <a name="immediate_data_purge_on30_days_enabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.immediateDataPurgeOn30DaysEnabled"></a>

```python
immediate_data_purge_on30_days_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#immediate_data_purge_on_30_days_enabled LogAnalyticsWorkspace#immediate_data_purge_on_30_days_enabled}.

---

##### `internet_ingestion_enabled`<sup>Optional</sup> <a name="internet_ingestion_enabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.internetIngestionEnabled"></a>

```python
internet_ingestion_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#internet_ingestion_enabled LogAnalyticsWorkspace#internet_ingestion_enabled}.

---

##### `internet_query_enabled`<sup>Optional</sup> <a name="internet_query_enabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.internetQueryEnabled"></a>

```python
internet_query_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#internet_query_enabled LogAnalyticsWorkspace#internet_query_enabled}.

---

##### `local_authentication_disabled`<sup>Optional</sup> <a name="local_authentication_disabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.localAuthenticationDisabled"></a>

```python
local_authentication_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#local_authentication_disabled LogAnalyticsWorkspace#local_authentication_disabled}.

---

##### `reservation_capacity_in_gb_per_day`<sup>Optional</sup> <a name="reservation_capacity_in_gb_per_day" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.reservationCapacityInGbPerDay"></a>

```python
reservation_capacity_in_gb_per_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#reservation_capacity_in_gb_per_day LogAnalyticsWorkspace#reservation_capacity_in_gb_per_day}.

---

##### `retention_in_days`<sup>Optional</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#retention_in_days LogAnalyticsWorkspace#retention_in_days}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#sku LogAnalyticsWorkspace#sku}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#tags LogAnalyticsWorkspace#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.timeouts"></a>

```python
timeouts: LogAnalyticsWorkspaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts">LogAnalyticsWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#timeouts LogAnalyticsWorkspace#timeouts}

---

### LogAnalyticsWorkspaceIdentity <a name="LogAnalyticsWorkspaceIdentity" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_workspace

logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#type LogAnalyticsWorkspace#type}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#identity_ids LogAnalyticsWorkspace#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#type LogAnalyticsWorkspace#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#identity_ids LogAnalyticsWorkspace#identity_ids}.

---

### LogAnalyticsWorkspaceTimeouts <a name="LogAnalyticsWorkspaceTimeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_workspace

logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#create LogAnalyticsWorkspace#create}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#delete LogAnalyticsWorkspace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#read LogAnalyticsWorkspace#read}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#update LogAnalyticsWorkspace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#create LogAnalyticsWorkspace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#delete LogAnalyticsWorkspace#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#read LogAnalyticsWorkspace#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/log_analytics_workspace#update LogAnalyticsWorkspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsWorkspaceIdentityOutputReference <a name="LogAnalyticsWorkspaceIdentityOutputReference" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_workspace

logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity">LogAnalyticsWorkspaceIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.internalValue"></a>

```python
internal_value: LogAnalyticsWorkspaceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity">LogAnalyticsWorkspaceIdentity</a>

---


### LogAnalyticsWorkspaceTimeoutsOutputReference <a name="LogAnalyticsWorkspaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import log_analytics_workspace

logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts">LogAnalyticsWorkspaceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogAnalyticsWorkspaceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts">LogAnalyticsWorkspaceTimeouts</a>]

---



