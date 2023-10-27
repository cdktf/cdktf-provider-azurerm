# `azurerm_new_relic_monitor`

Refer to the Terraform Registory for docs: [`azurerm_new_relic_monitor`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor).

# `newRelicMonitor` Submodule <a name="`newRelicMonitor` Submodule" id="@cdktf/provider-azurerm.newRelicMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NewRelicMonitor <a name="NewRelicMonitor" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor azurerm_new_relic_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_monitor

newRelicMonitor.NewRelicMonitor(
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
  plan: NewRelicMonitorPlan,
  resource_group_name: str,
  user: NewRelicMonitorUser,
  account_creation_source: str = None,
  account_id: str = None,
  id: str = None,
  ingestion_key: str = None,
  organization_id: str = None,
  org_creation_source: str = None,
  timeouts: NewRelicMonitorTimeouts = None,
  user_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#location NewRelicMonitor#location}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#name NewRelicMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#resource_group_name NewRelicMonitor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.user">user</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a></code> | user block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.accountCreationSource">account_creation_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#account_creation_source NewRelicMonitor#account_creation_source}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#account_id NewRelicMonitor#account_id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#id NewRelicMonitor#id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.ingestionKey">ingestion_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#ingestion_key NewRelicMonitor#ingestion_key}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.organizationId">organization_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#organization_id NewRelicMonitor#organization_id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.orgCreationSource">org_creation_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#org_creation_source NewRelicMonitor#org_creation_source}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#user_id NewRelicMonitor#user_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#location NewRelicMonitor#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#name NewRelicMonitor#name}.

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.plan"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#plan NewRelicMonitor#plan}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#resource_group_name NewRelicMonitor#resource_group_name}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.user"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#user NewRelicMonitor#user}

---

##### `account_creation_source`<sup>Optional</sup> <a name="account_creation_source" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.accountCreationSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#account_creation_source NewRelicMonitor#account_creation_source}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#account_id NewRelicMonitor#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#id NewRelicMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingestion_key`<sup>Optional</sup> <a name="ingestion_key" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.ingestionKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#ingestion_key NewRelicMonitor#ingestion_key}.

---

##### `organization_id`<sup>Optional</sup> <a name="organization_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.organizationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#organization_id NewRelicMonitor#organization_id}.

---

##### `org_creation_source`<sup>Optional</sup> <a name="org_creation_source" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.orgCreationSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#org_creation_source NewRelicMonitor#org_creation_source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#timeouts NewRelicMonitor#timeouts}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.userId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#user_id NewRelicMonitor#user_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putPlan">put_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putUser">put_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetAccountCreationSource">reset_account_creation_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetIngestionKey">reset_ingestion_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetOrganizationId">reset_organization_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetOrgCreationSource">reset_org_creation_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_plan` <a name="put_plan" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putPlan"></a>

```python
def put_plan(
  effective_date: str,
  billing_cycle: str = None,
  plan_id: str = None,
  usage_type: str = None
) -> None
```

###### `effective_date`<sup>Required</sup> <a name="effective_date" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putPlan.parameter.effectiveDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#effective_date NewRelicMonitor#effective_date}.

---

###### `billing_cycle`<sup>Optional</sup> <a name="billing_cycle" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putPlan.parameter.billingCycle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#billing_cycle NewRelicMonitor#billing_cycle}.

---

###### `plan_id`<sup>Optional</sup> <a name="plan_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putPlan.parameter.planId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#plan_id NewRelicMonitor#plan_id}.

---

###### `usage_type`<sup>Optional</sup> <a name="usage_type" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putPlan.parameter.usageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#usage_type NewRelicMonitor#usage_type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#create NewRelicMonitor#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#delete NewRelicMonitor#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#read NewRelicMonitor#read}.

---

##### `put_user` <a name="put_user" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putUser"></a>

```python
def put_user(
  email: str,
  first_name: str,
  last_name: str,
  phone_number: str
) -> None
```

###### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putUser.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#email NewRelicMonitor#email}.

---

###### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putUser.parameter.firstName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#first_name NewRelicMonitor#first_name}.

---

###### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putUser.parameter.lastName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#last_name NewRelicMonitor#last_name}.

---

###### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.putUser.parameter.phoneNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#phone_number NewRelicMonitor#phone_number}.

---

##### `reset_account_creation_source` <a name="reset_account_creation_source" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetAccountCreationSource"></a>

```python
def reset_account_creation_source() -> None
```

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingestion_key` <a name="reset_ingestion_key" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetIngestionKey"></a>

```python
def reset_ingestion_key() -> None
```

##### `reset_organization_id` <a name="reset_organization_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetOrganizationId"></a>

```python
def reset_organization_id() -> None
```

##### `reset_org_creation_source` <a name="reset_org_creation_source" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetOrgCreationSource"></a>

```python
def reset_org_creation_source() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetUserId"></a>

```python
def reset_user_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NewRelicMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_monitor

newRelicMonitor.NewRelicMonitor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_monitor

newRelicMonitor.NewRelicMonitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_monitor

newRelicMonitor.NewRelicMonitor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_monitor

newRelicMonitor.NewRelicMonitor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NewRelicMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NewRelicMonitor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NewRelicMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NewRelicMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference">NewRelicMonitorPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference">NewRelicMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.user">user</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference">NewRelicMonitorUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountCreationSourceInput">account_creation_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.ingestionKeyInput">ingestion_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.organizationIdInput">organization_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.orgCreationSourceInput">org_creation_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.planInput">plan_input</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.userInput">user_input</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountCreationSource">account_creation_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.ingestionKey">ingestion_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.orgCreationSource">org_creation_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.userId">user_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.plan"></a>

```python
plan: NewRelicMonitorPlanOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference">NewRelicMonitorPlanOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.timeouts"></a>

```python
timeouts: NewRelicMonitorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference">NewRelicMonitorTimeoutsOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.user"></a>

```python
user: NewRelicMonitorUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference">NewRelicMonitorUserOutputReference</a>

---

##### `account_creation_source_input`<sup>Optional</sup> <a name="account_creation_source_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountCreationSourceInput"></a>

```python
account_creation_source_input: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingestion_key_input`<sup>Optional</sup> <a name="ingestion_key_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.ingestionKeyInput"></a>

```python
ingestion_key_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `organization_id_input`<sup>Optional</sup> <a name="organization_id_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.organizationIdInput"></a>

```python
organization_id_input: str
```

- *Type:* str

---

##### `org_creation_source_input`<sup>Optional</sup> <a name="org_creation_source_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.orgCreationSourceInput"></a>

```python
org_creation_source_input: str
```

- *Type:* str

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.planInput"></a>

```python
plan_input: NewRelicMonitorPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NewRelicMonitorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a>]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.userInput"></a>

```python
user_input: NewRelicMonitorUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a>

---

##### `account_creation_source`<sup>Required</sup> <a name="account_creation_source" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountCreationSource"></a>

```python
account_creation_source: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingestion_key`<sup>Required</sup> <a name="ingestion_key" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.ingestionKey"></a>

```python
ingestion_key: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `org_creation_source`<sup>Required</sup> <a name="org_creation_source" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.orgCreationSource"></a>

```python
org_creation_source: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NewRelicMonitorConfig <a name="NewRelicMonitorConfig" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_monitor

newRelicMonitor.NewRelicMonitorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  plan: NewRelicMonitorPlan,
  resource_group_name: str,
  user: NewRelicMonitorUser,
  account_creation_source: str = None,
  account_id: str = None,
  id: str = None,
  ingestion_key: str = None,
  organization_id: str = None,
  org_creation_source: str = None,
  timeouts: NewRelicMonitorTimeouts = None,
  user_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#location NewRelicMonitor#location}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#name NewRelicMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#resource_group_name NewRelicMonitor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.user">user</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a></code> | user block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.accountCreationSource">account_creation_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#account_creation_source NewRelicMonitor#account_creation_source}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#account_id NewRelicMonitor#account_id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#id NewRelicMonitor#id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.ingestionKey">ingestion_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#ingestion_key NewRelicMonitor#ingestion_key}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.organizationId">organization_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#organization_id NewRelicMonitor#organization_id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.orgCreationSource">org_creation_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#org_creation_source NewRelicMonitor#org_creation_source}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#user_id NewRelicMonitor#user_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#location NewRelicMonitor#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#name NewRelicMonitor#name}.

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.plan"></a>

```python
plan: NewRelicMonitorPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#plan NewRelicMonitor#plan}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#resource_group_name NewRelicMonitor#resource_group_name}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.user"></a>

```python
user: NewRelicMonitorUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#user NewRelicMonitor#user}

---

##### `account_creation_source`<sup>Optional</sup> <a name="account_creation_source" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.accountCreationSource"></a>

```python
account_creation_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#account_creation_source NewRelicMonitor#account_creation_source}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#account_id NewRelicMonitor#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#id NewRelicMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingestion_key`<sup>Optional</sup> <a name="ingestion_key" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.ingestionKey"></a>

```python
ingestion_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#ingestion_key NewRelicMonitor#ingestion_key}.

---

##### `organization_id`<sup>Optional</sup> <a name="organization_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#organization_id NewRelicMonitor#organization_id}.

---

##### `org_creation_source`<sup>Optional</sup> <a name="org_creation_source" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.orgCreationSource"></a>

```python
org_creation_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#org_creation_source NewRelicMonitor#org_creation_source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.timeouts"></a>

```python
timeouts: NewRelicMonitorTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#timeouts NewRelicMonitor#timeouts}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#user_id NewRelicMonitor#user_id}.

---

### NewRelicMonitorPlan <a name="NewRelicMonitorPlan" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_monitor

newRelicMonitor.NewRelicMonitorPlan(
  effective_date: str,
  billing_cycle: str = None,
  plan_id: str = None,
  usage_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.effectiveDate">effective_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#effective_date NewRelicMonitor#effective_date}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.billingCycle">billing_cycle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#billing_cycle NewRelicMonitor#billing_cycle}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.planId">plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#plan_id NewRelicMonitor#plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.usageType">usage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#usage_type NewRelicMonitor#usage_type}. |

---

##### `effective_date`<sup>Required</sup> <a name="effective_date" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.effectiveDate"></a>

```python
effective_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#effective_date NewRelicMonitor#effective_date}.

---

##### `billing_cycle`<sup>Optional</sup> <a name="billing_cycle" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.billingCycle"></a>

```python
billing_cycle: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#billing_cycle NewRelicMonitor#billing_cycle}.

---

##### `plan_id`<sup>Optional</sup> <a name="plan_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.planId"></a>

```python
plan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#plan_id NewRelicMonitor#plan_id}.

---

##### `usage_type`<sup>Optional</sup> <a name="usage_type" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.usageType"></a>

```python
usage_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#usage_type NewRelicMonitor#usage_type}.

---

### NewRelicMonitorTimeouts <a name="NewRelicMonitorTimeouts" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_monitor

newRelicMonitor.NewRelicMonitorTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#create NewRelicMonitor#create}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#delete NewRelicMonitor#delete}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#read NewRelicMonitor#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#create NewRelicMonitor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#delete NewRelicMonitor#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#read NewRelicMonitor#read}.

---

### NewRelicMonitorUser <a name="NewRelicMonitorUser" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_monitor

newRelicMonitor.NewRelicMonitorUser(
  email: str,
  first_name: str,
  last_name: str,
  phone_number: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#email NewRelicMonitor#email}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#first_name NewRelicMonitor#first_name}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#last_name NewRelicMonitor#last_name}. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#phone_number NewRelicMonitor#phone_number}. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#email NewRelicMonitor#email}.

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#first_name NewRelicMonitor#first_name}.

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#last_name NewRelicMonitor#last_name}.

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/new_relic_monitor#phone_number NewRelicMonitor#phone_number}.

---

## Classes <a name="Classes" id="Classes"></a>

### NewRelicMonitorPlanOutputReference <a name="NewRelicMonitorPlanOutputReference" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_monitor

newRelicMonitor.NewRelicMonitorPlanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resetBillingCycle">reset_billing_cycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resetPlanId">reset_plan_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resetUsageType">reset_usage_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_billing_cycle` <a name="reset_billing_cycle" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resetBillingCycle"></a>

```python
def reset_billing_cycle() -> None
```

##### `reset_plan_id` <a name="reset_plan_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resetPlanId"></a>

```python
def reset_plan_id() -> None
```

##### `reset_usage_type` <a name="reset_usage_type" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resetUsageType"></a>

```python
def reset_usage_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.billingCycleInput">billing_cycle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.effectiveDateInput">effective_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.planIdInput">plan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.usageTypeInput">usage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.billingCycle">billing_cycle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.effectiveDate">effective_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.planId">plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.usageType">usage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `billing_cycle_input`<sup>Optional</sup> <a name="billing_cycle_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.billingCycleInput"></a>

```python
billing_cycle_input: str
```

- *Type:* str

---

##### `effective_date_input`<sup>Optional</sup> <a name="effective_date_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.effectiveDateInput"></a>

```python
effective_date_input: str
```

- *Type:* str

---

##### `plan_id_input`<sup>Optional</sup> <a name="plan_id_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.planIdInput"></a>

```python
plan_id_input: str
```

- *Type:* str

---

##### `usage_type_input`<sup>Optional</sup> <a name="usage_type_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.usageTypeInput"></a>

```python
usage_type_input: str
```

- *Type:* str

---

##### `billing_cycle`<sup>Required</sup> <a name="billing_cycle" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.billingCycle"></a>

```python
billing_cycle: str
```

- *Type:* str

---

##### `effective_date`<sup>Required</sup> <a name="effective_date" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.effectiveDate"></a>

```python
effective_date: str
```

- *Type:* str

---

##### `plan_id`<sup>Required</sup> <a name="plan_id" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.planId"></a>

```python
plan_id: str
```

- *Type:* str

---

##### `usage_type`<sup>Required</sup> <a name="usage_type" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.usageType"></a>

```python
usage_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.internalValue"></a>

```python
internal_value: NewRelicMonitorPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a>

---


### NewRelicMonitorTimeoutsOutputReference <a name="NewRelicMonitorTimeoutsOutputReference" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_monitor

newRelicMonitor.NewRelicMonitorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NewRelicMonitorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a>]

---


### NewRelicMonitorUserOutputReference <a name="NewRelicMonitorUserOutputReference" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import new_relic_monitor

newRelicMonitor.NewRelicMonitorUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.internalValue"></a>

```python
internal_value: NewRelicMonitorUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a>

---



