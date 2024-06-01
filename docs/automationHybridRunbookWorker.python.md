# `automationHybridRunbookWorker` Submodule <a name="`automationHybridRunbookWorker` Submodule" id="@cdktf/provider-azurerm.automationHybridRunbookWorker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationHybridRunbookWorker <a name="AutomationHybridRunbookWorker" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker azurerm_automation_hybrid_runbook_worker}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_hybrid_runbook_worker

automationHybridRunbookWorker.AutomationHybridRunbookWorker(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  automation_account_name: str,
  resource_group_name: str,
  vm_resource_id: str,
  worker_group_name: str,
  worker_id: str,
  id: str = None,
  timeouts: AutomationHybridRunbookWorkerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.automationAccountName">automation_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#automation_account_name AutomationHybridRunbookWorker#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#resource_group_name AutomationHybridRunbookWorker#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.vmResourceId">vm_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#vm_resource_id AutomationHybridRunbookWorker#vm_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.workerGroupName">worker_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#worker_group_name AutomationHybridRunbookWorker#worker_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.workerId">worker_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#worker_id AutomationHybridRunbookWorker#worker_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#id AutomationHybridRunbookWorker#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `automation_account_name`<sup>Required</sup> <a name="automation_account_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.automationAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#automation_account_name AutomationHybridRunbookWorker#automation_account_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#resource_group_name AutomationHybridRunbookWorker#resource_group_name}.

---

##### `vm_resource_id`<sup>Required</sup> <a name="vm_resource_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.vmResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#vm_resource_id AutomationHybridRunbookWorker#vm_resource_id}.

---

##### `worker_group_name`<sup>Required</sup> <a name="worker_group_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.workerGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#worker_group_name AutomationHybridRunbookWorker#worker_group_name}.

---

##### `worker_id`<sup>Required</sup> <a name="worker_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.workerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#worker_id AutomationHybridRunbookWorker#worker_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#id AutomationHybridRunbookWorker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#timeouts AutomationHybridRunbookWorker#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#create AutomationHybridRunbookWorker#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#delete AutomationHybridRunbookWorker#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#read AutomationHybridRunbookWorker#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AutomationHybridRunbookWorker resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_hybrid_runbook_worker

automationHybridRunbookWorker.AutomationHybridRunbookWorker.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_hybrid_runbook_worker

automationHybridRunbookWorker.AutomationHybridRunbookWorker.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_hybrid_runbook_worker

automationHybridRunbookWorker.AutomationHybridRunbookWorker.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_hybrid_runbook_worker

automationHybridRunbookWorker.AutomationHybridRunbookWorker.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AutomationHybridRunbookWorker resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AutomationHybridRunbookWorker to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AutomationHybridRunbookWorker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutomationHybridRunbookWorker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.lastSeenDateTime">last_seen_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.registrationDateTime">registration_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference">AutomationHybridRunbookWorkerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerName">worker_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerType">worker_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.automationAccountNameInput">automation_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.vmResourceIdInput">vm_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerGroupNameInput">worker_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerIdInput">worker_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.automationAccountName">automation_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.vmResourceId">vm_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerGroupName">worker_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerId">worker_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `last_seen_date_time`<sup>Required</sup> <a name="last_seen_date_time" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.lastSeenDateTime"></a>

```python
last_seen_date_time: str
```

- *Type:* str

---

##### `registration_date_time`<sup>Required</sup> <a name="registration_date_time" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.registrationDateTime"></a>

```python
registration_date_time: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.timeouts"></a>

```python
timeouts: AutomationHybridRunbookWorkerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference">AutomationHybridRunbookWorkerTimeoutsOutputReference</a>

---

##### `worker_name`<sup>Required</sup> <a name="worker_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerName"></a>

```python
worker_name: str
```

- *Type:* str

---

##### `worker_type`<sup>Required</sup> <a name="worker_type" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerType"></a>

```python
worker_type: str
```

- *Type:* str

---

##### `automation_account_name_input`<sup>Optional</sup> <a name="automation_account_name_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.automationAccountNameInput"></a>

```python
automation_account_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AutomationHybridRunbookWorkerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a>]

---

##### `vm_resource_id_input`<sup>Optional</sup> <a name="vm_resource_id_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.vmResourceIdInput"></a>

```python
vm_resource_id_input: str
```

- *Type:* str

---

##### `worker_group_name_input`<sup>Optional</sup> <a name="worker_group_name_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerGroupNameInput"></a>

```python
worker_group_name_input: str
```

- *Type:* str

---

##### `worker_id_input`<sup>Optional</sup> <a name="worker_id_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerIdInput"></a>

```python
worker_id_input: str
```

- *Type:* str

---

##### `automation_account_name`<sup>Required</sup> <a name="automation_account_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.automationAccountName"></a>

```python
automation_account_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `vm_resource_id`<sup>Required</sup> <a name="vm_resource_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.vmResourceId"></a>

```python
vm_resource_id: str
```

- *Type:* str

---

##### `worker_group_name`<sup>Required</sup> <a name="worker_group_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerGroupName"></a>

```python
worker_group_name: str
```

- *Type:* str

---

##### `worker_id`<sup>Required</sup> <a name="worker_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.workerId"></a>

```python
worker_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorker.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationHybridRunbookWorkerConfig <a name="AutomationHybridRunbookWorkerConfig" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_hybrid_runbook_worker

automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  automation_account_name: str,
  resource_group_name: str,
  vm_resource_id: str,
  worker_group_name: str,
  worker_id: str,
  id: str = None,
  timeouts: AutomationHybridRunbookWorkerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.automationAccountName">automation_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#automation_account_name AutomationHybridRunbookWorker#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#resource_group_name AutomationHybridRunbookWorker#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.vmResourceId">vm_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#vm_resource_id AutomationHybridRunbookWorker#vm_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.workerGroupName">worker_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#worker_group_name AutomationHybridRunbookWorker#worker_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.workerId">worker_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#worker_id AutomationHybridRunbookWorker#worker_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#id AutomationHybridRunbookWorker#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `automation_account_name`<sup>Required</sup> <a name="automation_account_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.automationAccountName"></a>

```python
automation_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#automation_account_name AutomationHybridRunbookWorker#automation_account_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#resource_group_name AutomationHybridRunbookWorker#resource_group_name}.

---

##### `vm_resource_id`<sup>Required</sup> <a name="vm_resource_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.vmResourceId"></a>

```python
vm_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#vm_resource_id AutomationHybridRunbookWorker#vm_resource_id}.

---

##### `worker_group_name`<sup>Required</sup> <a name="worker_group_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.workerGroupName"></a>

```python
worker_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#worker_group_name AutomationHybridRunbookWorker#worker_group_name}.

---

##### `worker_id`<sup>Required</sup> <a name="worker_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.workerId"></a>

```python
worker_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#worker_id AutomationHybridRunbookWorker#worker_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#id AutomationHybridRunbookWorker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerConfig.property.timeouts"></a>

```python
timeouts: AutomationHybridRunbookWorkerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#timeouts AutomationHybridRunbookWorker#timeouts}

---

### AutomationHybridRunbookWorkerTimeouts <a name="AutomationHybridRunbookWorkerTimeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_hybrid_runbook_worker

automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#create AutomationHybridRunbookWorker#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#delete AutomationHybridRunbookWorker#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#read AutomationHybridRunbookWorker#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#create AutomationHybridRunbookWorker#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#delete AutomationHybridRunbookWorker#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/automation_hybrid_runbook_worker#read AutomationHybridRunbookWorker#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationHybridRunbookWorkerTimeoutsOutputReference <a name="AutomationHybridRunbookWorkerTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_hybrid_runbook_worker

automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AutomationHybridRunbookWorkerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorker.AutomationHybridRunbookWorkerTimeouts">AutomationHybridRunbookWorkerTimeouts</a>]

---



