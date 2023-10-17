# `azurerm_resource_group_cost_management_view`

Refer to the Terraform Registory for docs: [`azurerm_resource_group_cost_management_view`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view).

# `resourceGroupCostManagementView` Submodule <a name="`resourceGroupCostManagementView` Submodule" id="@cdktf/provider-azurerm.resourceGroupCostManagementView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceGroupCostManagementView <a name="ResourceGroupCostManagementView" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view azurerm_resource_group_cost_management_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementView;

ResourceGroupCostManagementView.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accumulated(java.lang.Boolean)
    .accumulated(IResolvable)
    .chartType(java.lang.String)
    .dataset(ResourceGroupCostManagementViewDataset)
    .displayName(java.lang.String)
    .name(java.lang.String)
    .reportType(java.lang.String)
    .resourceGroupId(java.lang.String)
    .timeframe(java.lang.String)
//  .id(java.lang.String)
//  .kpi(IResolvable)
//  .kpi(java.util.List<ResourceGroupCostManagementViewKpi>)
//  .pivot(IResolvable)
//  .pivot(java.util.List<ResourceGroupCostManagementViewPivot>)
//  .timeouts(ResourceGroupCostManagementViewTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.accumulated">accumulated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#accumulated ResourceGroupCostManagementView#accumulated}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.chartType">chartType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#chart_type ResourceGroupCostManagementView#chart_type}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#display_name ResourceGroupCostManagementView#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.reportType">reportType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#report_type ResourceGroupCostManagementView#report_type}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#resource_group_id ResourceGroupCostManagementView#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.timeframe">timeframe</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#timeframe ResourceGroupCostManagementView#timeframe}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#id ResourceGroupCostManagementView#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.kpi">kpi</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>></code> | kpi block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.pivot">pivot</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>></code> | pivot block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accumulated`<sup>Required</sup> <a name="accumulated" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.accumulated"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#accumulated ResourceGroupCostManagementView#accumulated}.

---

##### `chartType`<sup>Required</sup> <a name="chartType" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.chartType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#chart_type ResourceGroupCostManagementView#chart_type}.

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.dataset"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#dataset ResourceGroupCostManagementView#dataset}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#display_name ResourceGroupCostManagementView#display_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}.

---

##### `reportType`<sup>Required</sup> <a name="reportType" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.reportType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#report_type ResourceGroupCostManagementView#report_type}.

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.resourceGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#resource_group_id ResourceGroupCostManagementView#resource_group_id}.

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.timeframe"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#timeframe ResourceGroupCostManagementView#timeframe}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#id ResourceGroupCostManagementView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kpi`<sup>Optional</sup> <a name="kpi" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.kpi"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>>

kpi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#kpi ResourceGroupCostManagementView#kpi}

---

##### `pivot`<sup>Optional</sup> <a name="pivot" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.pivot"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>>

pivot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#pivot ResourceGroupCostManagementView#pivot}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#timeouts ResourceGroupCostManagementView#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putDataset">putDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putKpi">putKpi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putPivot">putPivot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetKpi">resetKpi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetPivot">resetPivot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putDataset` <a name="putDataset" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putDataset"></a>

```java
public void putDataset(ResourceGroupCostManagementViewDataset value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a>

---

##### `putKpi` <a name="putKpi" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putKpi"></a>

```java
public void putKpi(IResolvable OR java.util.List<ResourceGroupCostManagementViewKpi> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putKpi.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>>

---

##### `putPivot` <a name="putPivot" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putPivot"></a>

```java
public void putPivot(IResolvable OR java.util.List<ResourceGroupCostManagementViewPivot> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putPivot.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putTimeouts"></a>

```java
public void putTimeouts(ResourceGroupCostManagementViewTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetId"></a>

```java
public void resetId()
```

##### `resetKpi` <a name="resetKpi" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetKpi"></a>

```java
public void resetKpi()
```

##### `resetPivot` <a name="resetPivot" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetPivot"></a>

```java
public void resetPivot()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceGroupCostManagementView resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementView;

ResourceGroupCostManagementView.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementView;

ResourceGroupCostManagementView.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementView;

ResourceGroupCostManagementView.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementView;

ResourceGroupCostManagementView.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResourceGroupCostManagementView.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ResourceGroupCostManagementView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResourceGroupCostManagementView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResourceGroupCostManagementView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ResourceGroupCostManagementView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference">ResourceGroupCostManagementViewDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.kpi">kpi</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList">ResourceGroupCostManagementViewKpiList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.pivot">pivot</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList">ResourceGroupCostManagementViewPivotList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference">ResourceGroupCostManagementViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.accumulatedInput">accumulatedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.chartTypeInput">chartTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.datasetInput">datasetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.kpiInput">kpiInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.pivotInput">pivotInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.reportTypeInput">reportTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.resourceGroupIdInput">resourceGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeframeInput">timeframeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.accumulated">accumulated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.chartType">chartType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.reportType">reportType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeframe">timeframe</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.dataset"></a>

```java
public ResourceGroupCostManagementViewDatasetOutputReference getDataset();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference">ResourceGroupCostManagementViewDatasetOutputReference</a>

---

##### `kpi`<sup>Required</sup> <a name="kpi" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.kpi"></a>

```java
public ResourceGroupCostManagementViewKpiList getKpi();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList">ResourceGroupCostManagementViewKpiList</a>

---

##### `pivot`<sup>Required</sup> <a name="pivot" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.pivot"></a>

```java
public ResourceGroupCostManagementViewPivotList getPivot();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList">ResourceGroupCostManagementViewPivotList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeouts"></a>

```java
public ResourceGroupCostManagementViewTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference">ResourceGroupCostManagementViewTimeoutsOutputReference</a>

---

##### `accumulatedInput`<sup>Optional</sup> <a name="accumulatedInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.accumulatedInput"></a>

```java
public java.lang.Object getAccumulatedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `chartTypeInput`<sup>Optional</sup> <a name="chartTypeInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.chartTypeInput"></a>

```java
public java.lang.String getChartTypeInput();
```

- *Type:* java.lang.String

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.datasetInput"></a>

```java
public ResourceGroupCostManagementViewDataset getDatasetInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kpiInput`<sup>Optional</sup> <a name="kpiInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.kpiInput"></a>

```java
public java.lang.Object getKpiInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pivotInput`<sup>Optional</sup> <a name="pivotInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.pivotInput"></a>

```java
public java.lang.Object getPivotInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>>

---

##### `reportTypeInput`<sup>Optional</sup> <a name="reportTypeInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.reportTypeInput"></a>

```java
public java.lang.String getReportTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupIdInput`<sup>Optional</sup> <a name="resourceGroupIdInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.resourceGroupIdInput"></a>

```java
public java.lang.String getResourceGroupIdInput();
```

- *Type:* java.lang.String

---

##### `timeframeInput`<sup>Optional</sup> <a name="timeframeInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeframeInput"></a>

```java
public java.lang.String getTimeframeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a>

---

##### `accumulated`<sup>Required</sup> <a name="accumulated" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.accumulated"></a>

```java
public java.lang.Object getAccumulated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `chartType`<sup>Required</sup> <a name="chartType" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.chartType"></a>

```java
public java.lang.String getChartType();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reportType`<sup>Required</sup> <a name="reportType" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.reportType"></a>

```java
public java.lang.String getReportType();
```

- *Type:* java.lang.String

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.resourceGroupId"></a>

```java
public java.lang.String getResourceGroupId();
```

- *Type:* java.lang.String

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.timeframe"></a>

```java
public java.lang.String getTimeframe();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementView.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceGroupCostManagementViewConfig <a name="ResourceGroupCostManagementViewConfig" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewConfig;

ResourceGroupCostManagementViewConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accumulated(java.lang.Boolean)
    .accumulated(IResolvable)
    .chartType(java.lang.String)
    .dataset(ResourceGroupCostManagementViewDataset)
    .displayName(java.lang.String)
    .name(java.lang.String)
    .reportType(java.lang.String)
    .resourceGroupId(java.lang.String)
    .timeframe(java.lang.String)
//  .id(java.lang.String)
//  .kpi(IResolvable)
//  .kpi(java.util.List<ResourceGroupCostManagementViewKpi>)
//  .pivot(IResolvable)
//  .pivot(java.util.List<ResourceGroupCostManagementViewPivot>)
//  .timeouts(ResourceGroupCostManagementViewTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.accumulated">accumulated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#accumulated ResourceGroupCostManagementView#accumulated}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.chartType">chartType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#chart_type ResourceGroupCostManagementView#chart_type}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#display_name ResourceGroupCostManagementView#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.reportType">reportType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#report_type ResourceGroupCostManagementView#report_type}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#resource_group_id ResourceGroupCostManagementView#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.timeframe">timeframe</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#timeframe ResourceGroupCostManagementView#timeframe}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#id ResourceGroupCostManagementView#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.kpi">kpi</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>></code> | kpi block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.pivot">pivot</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>></code> | pivot block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accumulated`<sup>Required</sup> <a name="accumulated" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.accumulated"></a>

```java
public java.lang.Object getAccumulated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#accumulated ResourceGroupCostManagementView#accumulated}.

---

##### `chartType`<sup>Required</sup> <a name="chartType" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.chartType"></a>

```java
public java.lang.String getChartType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#chart_type ResourceGroupCostManagementView#chart_type}.

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.dataset"></a>

```java
public ResourceGroupCostManagementViewDataset getDataset();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#dataset ResourceGroupCostManagementView#dataset}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#display_name ResourceGroupCostManagementView#display_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}.

---

##### `reportType`<sup>Required</sup> <a name="reportType" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.reportType"></a>

```java
public java.lang.String getReportType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#report_type ResourceGroupCostManagementView#report_type}.

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.resourceGroupId"></a>

```java
public java.lang.String getResourceGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#resource_group_id ResourceGroupCostManagementView#resource_group_id}.

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.timeframe"></a>

```java
public java.lang.String getTimeframe();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#timeframe ResourceGroupCostManagementView#timeframe}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#id ResourceGroupCostManagementView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kpi`<sup>Optional</sup> <a name="kpi" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.kpi"></a>

```java
public java.lang.Object getKpi();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>>

kpi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#kpi ResourceGroupCostManagementView#kpi}

---

##### `pivot`<sup>Optional</sup> <a name="pivot" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.pivot"></a>

```java
public java.lang.Object getPivot();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>>

pivot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#pivot ResourceGroupCostManagementView#pivot}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewConfig.property.timeouts"></a>

```java
public ResourceGroupCostManagementViewTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#timeouts ResourceGroupCostManagementView#timeouts}

---

### ResourceGroupCostManagementViewDataset <a name="ResourceGroupCostManagementViewDataset" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewDataset;

ResourceGroupCostManagementViewDataset.builder()
    .aggregation(IResolvable)
    .aggregation(java.util.List<ResourceGroupCostManagementViewDatasetAggregation>)
    .granularity(java.lang.String)
//  .grouping(IResolvable)
//  .grouping(java.util.List<ResourceGroupCostManagementViewDatasetGrouping>)
//  .sorting(IResolvable)
//  .sorting(java.util.List<ResourceGroupCostManagementViewDatasetSorting>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.aggregation">aggregation</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation">ResourceGroupCostManagementViewDatasetAggregation</a>></code> | aggregation block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.granularity">granularity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#granularity ResourceGroupCostManagementView#granularity}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.grouping">grouping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping">ResourceGroupCostManagementViewDatasetGrouping</a>></code> | grouping block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.sorting">sorting</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting">ResourceGroupCostManagementViewDatasetSorting</a>></code> | sorting block. |

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.aggregation"></a>

```java
public java.lang.Object getAggregation();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation">ResourceGroupCostManagementViewDatasetAggregation</a>>

aggregation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#aggregation ResourceGroupCostManagementView#aggregation}

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.granularity"></a>

```java
public java.lang.String getGranularity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#granularity ResourceGroupCostManagementView#granularity}.

---

##### `grouping`<sup>Optional</sup> <a name="grouping" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.grouping"></a>

```java
public java.lang.Object getGrouping();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping">ResourceGroupCostManagementViewDatasetGrouping</a>>

grouping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#grouping ResourceGroupCostManagementView#grouping}

---

##### `sorting`<sup>Optional</sup> <a name="sorting" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset.property.sorting"></a>

```java
public java.lang.Object getSorting();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting">ResourceGroupCostManagementViewDatasetSorting</a>>

sorting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#sorting ResourceGroupCostManagementView#sorting}

---

### ResourceGroupCostManagementViewDatasetAggregation <a name="ResourceGroupCostManagementViewDatasetAggregation" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewDatasetAggregation;

ResourceGroupCostManagementViewDatasetAggregation.builder()
    .columnName(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation.property.columnName">columnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#column_name ResourceGroupCostManagementView#column_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}. |

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#column_name ResourceGroupCostManagementView#column_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}.

---

### ResourceGroupCostManagementViewDatasetGrouping <a name="ResourceGroupCostManagementViewDatasetGrouping" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewDatasetGrouping;

ResourceGroupCostManagementViewDatasetGrouping.builder()
    .name(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}.

---

### ResourceGroupCostManagementViewDatasetSorting <a name="ResourceGroupCostManagementViewDatasetSorting" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewDatasetSorting;

ResourceGroupCostManagementViewDatasetSorting.builder()
    .direction(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting.property.direction">direction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#direction ResourceGroupCostManagementView#direction}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}. |

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#direction ResourceGroupCostManagementView#direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}.

---

### ResourceGroupCostManagementViewKpi <a name="ResourceGroupCostManagementViewKpi" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewKpi;

ResourceGroupCostManagementViewKpi.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}.

---

### ResourceGroupCostManagementViewPivot <a name="ResourceGroupCostManagementViewPivot" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewPivot;

ResourceGroupCostManagementViewPivot.builder()
    .name(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#name ResourceGroupCostManagementView#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#type ResourceGroupCostManagementView#type}.

---

### ResourceGroupCostManagementViewTimeouts <a name="ResourceGroupCostManagementViewTimeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewTimeouts;

ResourceGroupCostManagementViewTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#create ResourceGroupCostManagementView#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#delete ResourceGroupCostManagementView#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#read ResourceGroupCostManagementView#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#update ResourceGroupCostManagementView#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#create ResourceGroupCostManagementView#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#delete ResourceGroupCostManagementView#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#read ResourceGroupCostManagementView#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_view#update ResourceGroupCostManagementView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceGroupCostManagementViewDatasetAggregationList <a name="ResourceGroupCostManagementViewDatasetAggregationList" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewDatasetAggregationList;

new ResourceGroupCostManagementViewDatasetAggregationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.get"></a>

```java
public ResourceGroupCostManagementViewDatasetAggregationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation">ResourceGroupCostManagementViewDatasetAggregation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation">ResourceGroupCostManagementViewDatasetAggregation</a>>

---


### ResourceGroupCostManagementViewDatasetAggregationOutputReference <a name="ResourceGroupCostManagementViewDatasetAggregationOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewDatasetAggregationOutputReference;

new ResourceGroupCostManagementViewDatasetAggregationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation">ResourceGroupCostManagementViewDatasetAggregation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.columnNameInput"></a>

```java
public java.lang.String getColumnNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation">ResourceGroupCostManagementViewDatasetAggregation</a>

---


### ResourceGroupCostManagementViewDatasetGroupingList <a name="ResourceGroupCostManagementViewDatasetGroupingList" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewDatasetGroupingList;

new ResourceGroupCostManagementViewDatasetGroupingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.get"></a>

```java
public ResourceGroupCostManagementViewDatasetGroupingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping">ResourceGroupCostManagementViewDatasetGrouping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping">ResourceGroupCostManagementViewDatasetGrouping</a>>

---


### ResourceGroupCostManagementViewDatasetGroupingOutputReference <a name="ResourceGroupCostManagementViewDatasetGroupingOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewDatasetGroupingOutputReference;

new ResourceGroupCostManagementViewDatasetGroupingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping">ResourceGroupCostManagementViewDatasetGrouping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping">ResourceGroupCostManagementViewDatasetGrouping</a>

---


### ResourceGroupCostManagementViewDatasetOutputReference <a name="ResourceGroupCostManagementViewDatasetOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewDatasetOutputReference;

new ResourceGroupCostManagementViewDatasetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putAggregation">putAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putGrouping">putGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putSorting">putSorting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resetGrouping">resetGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resetSorting">resetSorting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAggregation` <a name="putAggregation" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putAggregation"></a>

```java
public void putAggregation(IResolvable OR java.util.List<ResourceGroupCostManagementViewDatasetAggregation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putAggregation.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation">ResourceGroupCostManagementViewDatasetAggregation</a>>

---

##### `putGrouping` <a name="putGrouping" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putGrouping"></a>

```java
public void putGrouping(IResolvable OR java.util.List<ResourceGroupCostManagementViewDatasetGrouping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putGrouping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping">ResourceGroupCostManagementViewDatasetGrouping</a>>

---

##### `putSorting` <a name="putSorting" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putSorting"></a>

```java
public void putSorting(IResolvable OR java.util.List<ResourceGroupCostManagementViewDatasetSorting> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.putSorting.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting">ResourceGroupCostManagementViewDatasetSorting</a>>

---

##### `resetGrouping` <a name="resetGrouping" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resetGrouping"></a>

```java
public void resetGrouping()
```

##### `resetSorting` <a name="resetSorting" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.resetSorting"></a>

```java
public void resetSorting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.aggregation">aggregation</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList">ResourceGroupCostManagementViewDatasetAggregationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.grouping">grouping</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList">ResourceGroupCostManagementViewDatasetGroupingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.sorting">sorting</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList">ResourceGroupCostManagementViewDatasetSortingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation">ResourceGroupCostManagementViewDatasetAggregation</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.granularityInput">granularityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.groupingInput">groupingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping">ResourceGroupCostManagementViewDatasetGrouping</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.sortingInput">sortingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting">ResourceGroupCostManagementViewDatasetSorting</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.granularity">granularity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.aggregation"></a>

```java
public ResourceGroupCostManagementViewDatasetAggregationList getAggregation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregationList">ResourceGroupCostManagementViewDatasetAggregationList</a>

---

##### `grouping`<sup>Required</sup> <a name="grouping" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.grouping"></a>

```java
public ResourceGroupCostManagementViewDatasetGroupingList getGrouping();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGroupingList">ResourceGroupCostManagementViewDatasetGroupingList</a>

---

##### `sorting`<sup>Required</sup> <a name="sorting" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.sorting"></a>

```java
public ResourceGroupCostManagementViewDatasetSortingList getSorting();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList">ResourceGroupCostManagementViewDatasetSortingList</a>

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.aggregationInput"></a>

```java
public java.lang.Object getAggregationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetAggregation">ResourceGroupCostManagementViewDatasetAggregation</a>>

---

##### `granularityInput`<sup>Optional</sup> <a name="granularityInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.granularityInput"></a>

```java
public java.lang.String getGranularityInput();
```

- *Type:* java.lang.String

---

##### `groupingInput`<sup>Optional</sup> <a name="groupingInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.groupingInput"></a>

```java
public java.lang.Object getGroupingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetGrouping">ResourceGroupCostManagementViewDatasetGrouping</a>>

---

##### `sortingInput`<sup>Optional</sup> <a name="sortingInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.sortingInput"></a>

```java
public java.lang.Object getSortingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting">ResourceGroupCostManagementViewDatasetSorting</a>>

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.granularity"></a>

```java
public java.lang.String getGranularity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetOutputReference.property.internalValue"></a>

```java
public ResourceGroupCostManagementViewDataset getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDataset">ResourceGroupCostManagementViewDataset</a>

---


### ResourceGroupCostManagementViewDatasetSortingList <a name="ResourceGroupCostManagementViewDatasetSortingList" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewDatasetSortingList;

new ResourceGroupCostManagementViewDatasetSortingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.get"></a>

```java
public ResourceGroupCostManagementViewDatasetSortingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting">ResourceGroupCostManagementViewDatasetSorting</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting">ResourceGroupCostManagementViewDatasetSorting</a>>

---


### ResourceGroupCostManagementViewDatasetSortingOutputReference <a name="ResourceGroupCostManagementViewDatasetSortingOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewDatasetSortingOutputReference;

new ResourceGroupCostManagementViewDatasetSortingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting">ResourceGroupCostManagementViewDatasetSorting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSortingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewDatasetSorting">ResourceGroupCostManagementViewDatasetSorting</a>

---


### ResourceGroupCostManagementViewKpiList <a name="ResourceGroupCostManagementViewKpiList" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewKpiList;

new ResourceGroupCostManagementViewKpiList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.get"></a>

```java
public ResourceGroupCostManagementViewKpiOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>>

---


### ResourceGroupCostManagementViewKpiOutputReference <a name="ResourceGroupCostManagementViewKpiOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewKpiOutputReference;

new ResourceGroupCostManagementViewKpiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpiOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewKpi">ResourceGroupCostManagementViewKpi</a>

---


### ResourceGroupCostManagementViewPivotList <a name="ResourceGroupCostManagementViewPivotList" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewPivotList;

new ResourceGroupCostManagementViewPivotList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.get"></a>

```java
public ResourceGroupCostManagementViewPivotOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>>

---


### ResourceGroupCostManagementViewPivotOutputReference <a name="ResourceGroupCostManagementViewPivotOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewPivotOutputReference;

new ResourceGroupCostManagementViewPivotOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivotOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewPivot">ResourceGroupCostManagementViewPivot</a>

---


### ResourceGroupCostManagementViewTimeoutsOutputReference <a name="ResourceGroupCostManagementViewTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_view.ResourceGroupCostManagementViewTimeoutsOutputReference;

new ResourceGroupCostManagementViewTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementView.ResourceGroupCostManagementViewTimeouts">ResourceGroupCostManagementViewTimeouts</a>

---



