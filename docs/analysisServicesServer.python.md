# `azurerm_analysis_services_server`

Refer to the Terraform Registory for docs: [`azurerm_analysis_services_server`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server).

# `analysisServicesServer` Submodule <a name="`analysisServicesServer` Submodule" id="@cdktf/provider-azurerm.analysisServicesServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AnalysisServicesServer <a name="AnalysisServicesServer" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server azurerm_analysis_services_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import analysis_services_server

analysisServicesServer.AnalysisServicesServer(
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
  sku: str,
  admin_users: typing.List[str] = None,
  backup_blob_container_uri: str = None,
  enable_power_bi_service: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ipv4_firewall_rule: typing.Union[IResolvable, typing.List[AnalysisServicesServerIpv4FirewallRule]] = None,
  querypool_connection_mode: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: AnalysisServicesServerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#location AnalysisServicesServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#name AnalysisServicesServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#resource_group_name AnalysisServicesServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#sku AnalysisServicesServer#sku}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.adminUsers">admin_users</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#admin_users AnalysisServicesServer#admin_users}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.backupBlobContainerUri">backup_blob_container_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#backup_blob_container_uri AnalysisServicesServer#backup_blob_container_uri}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.enablePowerBiService">enable_power_bi_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#enable_power_bi_service AnalysisServicesServer#enable_power_bi_service}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#id AnalysisServicesServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.ipv4FirewallRule">ipv4_firewall_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>]]</code> | ipv4_firewall_rule block. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.querypoolConnectionMode">querypool_connection_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#querypool_connection_mode AnalysisServicesServer#querypool_connection_mode}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#tags AnalysisServicesServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#location AnalysisServicesServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#name AnalysisServicesServer#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#resource_group_name AnalysisServicesServer#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#sku AnalysisServicesServer#sku}.

---

##### `admin_users`<sup>Optional</sup> <a name="admin_users" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.adminUsers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#admin_users AnalysisServicesServer#admin_users}.

---

##### `backup_blob_container_uri`<sup>Optional</sup> <a name="backup_blob_container_uri" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.backupBlobContainerUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#backup_blob_container_uri AnalysisServicesServer#backup_blob_container_uri}.

---

##### `enable_power_bi_service`<sup>Optional</sup> <a name="enable_power_bi_service" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.enablePowerBiService"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#enable_power_bi_service AnalysisServicesServer#enable_power_bi_service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#id AnalysisServicesServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv4_firewall_rule`<sup>Optional</sup> <a name="ipv4_firewall_rule" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.ipv4FirewallRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>]]

ipv4_firewall_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#ipv4_firewall_rule AnalysisServicesServer#ipv4_firewall_rule}

---

##### `querypool_connection_mode`<sup>Optional</sup> <a name="querypool_connection_mode" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.querypoolConnectionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#querypool_connection_mode AnalysisServicesServer#querypool_connection_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#tags AnalysisServicesServer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#timeouts AnalysisServicesServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putIpv4FirewallRule">put_ipv4_firewall_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetAdminUsers">reset_admin_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetBackupBlobContainerUri">reset_backup_blob_container_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetEnablePowerBiService">reset_enable_power_bi_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetIpv4FirewallRule">reset_ipv4_firewall_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetQuerypoolConnectionMode">reset_querypool_connection_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_ipv4_firewall_rule` <a name="put_ipv4_firewall_rule" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putIpv4FirewallRule"></a>

```python
def put_ipv4_firewall_rule(
  value: typing.Union[IResolvable, typing.List[AnalysisServicesServerIpv4FirewallRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putIpv4FirewallRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#create AnalysisServicesServer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#delete AnalysisServicesServer#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#read AnalysisServicesServer#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#update AnalysisServicesServer#update}.

---

##### `reset_admin_users` <a name="reset_admin_users" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetAdminUsers"></a>

```python
def reset_admin_users() -> None
```

##### `reset_backup_blob_container_uri` <a name="reset_backup_blob_container_uri" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetBackupBlobContainerUri"></a>

```python
def reset_backup_blob_container_uri() -> None
```

##### `reset_enable_power_bi_service` <a name="reset_enable_power_bi_service" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetEnablePowerBiService"></a>

```python
def reset_enable_power_bi_service() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ipv4_firewall_rule` <a name="reset_ipv4_firewall_rule" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetIpv4FirewallRule"></a>

```python
def reset_ipv4_firewall_rule() -> None
```

##### `reset_querypool_connection_mode` <a name="reset_querypool_connection_mode" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetQuerypoolConnectionMode"></a>

```python
def reset_querypool_connection_mode() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import analysis_services_server

analysisServicesServer.AnalysisServicesServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import analysis_services_server

analysisServicesServer.AnalysisServicesServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import analysis_services_server

analysisServicesServer.AnalysisServicesServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.ipv4FirewallRule">ipv4_firewall_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList">AnalysisServicesServerIpv4FirewallRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.serverFullName">server_full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference">AnalysisServicesServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.adminUsersInput">admin_users_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.backupBlobContainerUriInput">backup_blob_container_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.enablePowerBiServiceInput">enable_power_bi_service_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.ipv4FirewallRuleInput">ipv4_firewall_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.querypoolConnectionModeInput">querypool_connection_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.adminUsers">admin_users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.backupBlobContainerUri">backup_blob_container_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.enablePowerBiService">enable_power_bi_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.querypoolConnectionMode">querypool_connection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipv4_firewall_rule`<sup>Required</sup> <a name="ipv4_firewall_rule" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.ipv4FirewallRule"></a>

```python
ipv4_firewall_rule: AnalysisServicesServerIpv4FirewallRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList">AnalysisServicesServerIpv4FirewallRuleList</a>

---

##### `server_full_name`<sup>Required</sup> <a name="server_full_name" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.serverFullName"></a>

```python
server_full_name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.timeouts"></a>

```python
timeouts: AnalysisServicesServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference">AnalysisServicesServerTimeoutsOutputReference</a>

---

##### `admin_users_input`<sup>Optional</sup> <a name="admin_users_input" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.adminUsersInput"></a>

```python
admin_users_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_blob_container_uri_input`<sup>Optional</sup> <a name="backup_blob_container_uri_input" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.backupBlobContainerUriInput"></a>

```python
backup_blob_container_uri_input: str
```

- *Type:* str

---

##### `enable_power_bi_service_input`<sup>Optional</sup> <a name="enable_power_bi_service_input" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.enablePowerBiServiceInput"></a>

```python
enable_power_bi_service_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipv4_firewall_rule_input`<sup>Optional</sup> <a name="ipv4_firewall_rule_input" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.ipv4FirewallRuleInput"></a>

```python
ipv4_firewall_rule_input: typing.Union[IResolvable, typing.List[AnalysisServicesServerIpv4FirewallRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>]]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `querypool_connection_mode_input`<sup>Optional</sup> <a name="querypool_connection_mode_input" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.querypoolConnectionModeInput"></a>

```python
querypool_connection_mode_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AnalysisServicesServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a>]

---

##### `admin_users`<sup>Required</sup> <a name="admin_users" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.adminUsers"></a>

```python
admin_users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_blob_container_uri`<sup>Required</sup> <a name="backup_blob_container_uri" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.backupBlobContainerUri"></a>

```python
backup_blob_container_uri: str
```

- *Type:* str

---

##### `enable_power_bi_service`<sup>Required</sup> <a name="enable_power_bi_service" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.enablePowerBiService"></a>

```python
enable_power_bi_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `querypool_connection_mode`<sup>Required</sup> <a name="querypool_connection_mode" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.querypoolConnectionMode"></a>

```python
querypool_connection_mode: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AnalysisServicesServerConfig <a name="AnalysisServicesServerConfig" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import analysis_services_server

analysisServicesServer.AnalysisServicesServerConfig(
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
  sku: str,
  admin_users: typing.List[str] = None,
  backup_blob_container_uri: str = None,
  enable_power_bi_service: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ipv4_firewall_rule: typing.Union[IResolvable, typing.List[AnalysisServicesServerIpv4FirewallRule]] = None,
  querypool_connection_mode: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: AnalysisServicesServerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#location AnalysisServicesServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#name AnalysisServicesServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#resource_group_name AnalysisServicesServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#sku AnalysisServicesServer#sku}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.adminUsers">admin_users</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#admin_users AnalysisServicesServer#admin_users}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.backupBlobContainerUri">backup_blob_container_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#backup_blob_container_uri AnalysisServicesServer#backup_blob_container_uri}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.enablePowerBiService">enable_power_bi_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#enable_power_bi_service AnalysisServicesServer#enable_power_bi_service}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#id AnalysisServicesServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.ipv4FirewallRule">ipv4_firewall_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>]]</code> | ipv4_firewall_rule block. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.querypoolConnectionMode">querypool_connection_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#querypool_connection_mode AnalysisServicesServer#querypool_connection_mode}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#tags AnalysisServicesServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#location AnalysisServicesServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#name AnalysisServicesServer#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#resource_group_name AnalysisServicesServer#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#sku AnalysisServicesServer#sku}.

---

##### `admin_users`<sup>Optional</sup> <a name="admin_users" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.adminUsers"></a>

```python
admin_users: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#admin_users AnalysisServicesServer#admin_users}.

---

##### `backup_blob_container_uri`<sup>Optional</sup> <a name="backup_blob_container_uri" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.backupBlobContainerUri"></a>

```python
backup_blob_container_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#backup_blob_container_uri AnalysisServicesServer#backup_blob_container_uri}.

---

##### `enable_power_bi_service`<sup>Optional</sup> <a name="enable_power_bi_service" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.enablePowerBiService"></a>

```python
enable_power_bi_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#enable_power_bi_service AnalysisServicesServer#enable_power_bi_service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#id AnalysisServicesServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv4_firewall_rule`<sup>Optional</sup> <a name="ipv4_firewall_rule" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.ipv4FirewallRule"></a>

```python
ipv4_firewall_rule: typing.Union[IResolvable, typing.List[AnalysisServicesServerIpv4FirewallRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>]]

ipv4_firewall_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#ipv4_firewall_rule AnalysisServicesServer#ipv4_firewall_rule}

---

##### `querypool_connection_mode`<sup>Optional</sup> <a name="querypool_connection_mode" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.querypoolConnectionMode"></a>

```python
querypool_connection_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#querypool_connection_mode AnalysisServicesServer#querypool_connection_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#tags AnalysisServicesServer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerConfig.property.timeouts"></a>

```python
timeouts: AnalysisServicesServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#timeouts AnalysisServicesServer#timeouts}

---

### AnalysisServicesServerIpv4FirewallRule <a name="AnalysisServicesServerIpv4FirewallRule" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import analysis_services_server

analysisServicesServer.AnalysisServicesServerIpv4FirewallRule(
  name: str,
  range_end: str,
  range_start: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#name AnalysisServicesServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.property.rangeEnd">range_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#range_end AnalysisServicesServer#range_end}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.property.rangeStart">range_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#range_start AnalysisServicesServer#range_start}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#name AnalysisServicesServer#name}.

---

##### `range_end`<sup>Required</sup> <a name="range_end" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.property.rangeEnd"></a>

```python
range_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#range_end AnalysisServicesServer#range_end}.

---

##### `range_start`<sup>Required</sup> <a name="range_start" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule.property.rangeStart"></a>

```python
range_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#range_start AnalysisServicesServer#range_start}.

---

### AnalysisServicesServerTimeouts <a name="AnalysisServicesServerTimeouts" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import analysis_services_server

analysisServicesServer.AnalysisServicesServerTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#create AnalysisServicesServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#delete AnalysisServicesServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#read AnalysisServicesServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#update AnalysisServicesServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#create AnalysisServicesServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#delete AnalysisServicesServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#read AnalysisServicesServer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/analysis_services_server#update AnalysisServicesServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AnalysisServicesServerIpv4FirewallRuleList <a name="AnalysisServicesServerIpv4FirewallRuleList" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import analysis_services_server

analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AnalysisServicesServerIpv4FirewallRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AnalysisServicesServerIpv4FirewallRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>]]

---


### AnalysisServicesServerIpv4FirewallRuleOutputReference <a name="AnalysisServicesServerIpv4FirewallRuleOutputReference" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import analysis_services_server

analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeEndInput">range_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeStartInput">range_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeEnd">range_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeStart">range_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `range_end_input`<sup>Optional</sup> <a name="range_end_input" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeEndInput"></a>

```python
range_end_input: str
```

- *Type:* str

---

##### `range_start_input`<sup>Optional</sup> <a name="range_start_input" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeStartInput"></a>

```python
range_start_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `range_end`<sup>Required</sup> <a name="range_end" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeEnd"></a>

```python
range_end: str
```

- *Type:* str

---

##### `range_start`<sup>Required</sup> <a name="range_start" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.rangeStart"></a>

```python
range_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AnalysisServicesServerIpv4FirewallRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerIpv4FirewallRule">AnalysisServicesServerIpv4FirewallRule</a>]

---


### AnalysisServicesServerTimeoutsOutputReference <a name="AnalysisServicesServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import analysis_services_server

analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AnalysisServicesServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.analysisServicesServer.AnalysisServicesServerTimeouts">AnalysisServicesServerTimeouts</a>]

---



