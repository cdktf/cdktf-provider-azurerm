# `subscriptionCostManagementExport` Submodule <a name="`subscriptionCostManagementExport` Submodule" id="@cdktf/provider-azurerm.subscriptionCostManagementExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubscriptionCostManagementExport <a name="SubscriptionCostManagementExport" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export azurerm_subscription_cost_management_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_cost_management_export.SubscriptionCostManagementExport;

SubscriptionCostManagementExport.Builder.create(Construct scope, java.lang.String id)
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
    .exportDataOptions(SubscriptionCostManagementExportExportDataOptions)
    .exportDataStorageLocation(SubscriptionCostManagementExportExportDataStorageLocation)
    .name(java.lang.String)
    .recurrencePeriodEndDate(java.lang.String)
    .recurrencePeriodStartDate(java.lang.String)
    .recurrenceType(java.lang.String)
    .subscriptionId(java.lang.String)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .id(java.lang.String)
//  .timeouts(SubscriptionCostManagementExportTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.exportDataOptions">exportDataOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a></code> | export_data_options block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.exportDataStorageLocation">exportDataStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a></code> | export_data_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#name SubscriptionCostManagementExport#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.recurrencePeriodEndDate">recurrencePeriodEndDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#recurrence_period_end_date SubscriptionCostManagementExport#recurrence_period_end_date}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.recurrencePeriodStartDate">recurrencePeriodStartDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#recurrence_period_start_date SubscriptionCostManagementExport#recurrence_period_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.recurrenceType">recurrenceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#recurrence_type SubscriptionCostManagementExport#recurrence_type}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#subscription_id SubscriptionCostManagementExport#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#active SubscriptionCostManagementExport#active}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#id SubscriptionCostManagementExport#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exportDataOptions`<sup>Required</sup> <a name="exportDataOptions" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.exportDataOptions"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a>

export_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#export_data_options SubscriptionCostManagementExport#export_data_options}

---

##### `exportDataStorageLocation`<sup>Required</sup> <a name="exportDataStorageLocation" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.exportDataStorageLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a>

export_data_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#export_data_storage_location SubscriptionCostManagementExport#export_data_storage_location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#name SubscriptionCostManagementExport#name}.

---

##### `recurrencePeriodEndDate`<sup>Required</sup> <a name="recurrencePeriodEndDate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.recurrencePeriodEndDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#recurrence_period_end_date SubscriptionCostManagementExport#recurrence_period_end_date}.

---

##### `recurrencePeriodStartDate`<sup>Required</sup> <a name="recurrencePeriodStartDate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.recurrencePeriodStartDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#recurrence_period_start_date SubscriptionCostManagementExport#recurrence_period_start_date}.

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.recurrenceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#recurrence_type SubscriptionCostManagementExport#recurrence_type}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#subscription_id SubscriptionCostManagementExport#subscription_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#active SubscriptionCostManagementExport#active}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#id SubscriptionCostManagementExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#timeouts SubscriptionCostManagementExport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataOptions">putExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataStorageLocation">putExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExportDataOptions` <a name="putExportDataOptions" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataOptions"></a>

```java
public void putExportDataOptions(SubscriptionCostManagementExportExportDataOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a>

---

##### `putExportDataStorageLocation` <a name="putExportDataStorageLocation" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataStorageLocation"></a>

```java
public void putExportDataStorageLocation(SubscriptionCostManagementExportExportDataStorageLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putTimeouts"></a>

```java
public void putTimeouts(SubscriptionCostManagementExportTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a>

---

##### `resetActive` <a name="resetActive" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetActive"></a>

```java
public void resetActive()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SubscriptionCostManagementExport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_cost_management_export.SubscriptionCostManagementExport;

SubscriptionCostManagementExport.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_cost_management_export.SubscriptionCostManagementExport;

SubscriptionCostManagementExport.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_cost_management_export.SubscriptionCostManagementExport;

SubscriptionCostManagementExport.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_cost_management_export.SubscriptionCostManagementExport;

SubscriptionCostManagementExport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SubscriptionCostManagementExport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SubscriptionCostManagementExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SubscriptionCostManagementExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SubscriptionCostManagementExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SubscriptionCostManagementExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataOptions">exportDataOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference">SubscriptionCostManagementExportExportDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataStorageLocation">exportDataStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference">SubscriptionCostManagementExportExportDataStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference">SubscriptionCostManagementExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataOptionsInput">exportDataOptionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataStorageLocationInput">exportDataStorageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodEndDateInput">recurrencePeriodEndDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodStartDateInput">recurrencePeriodStartDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrenceTypeInput">recurrenceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodEndDate">recurrencePeriodEndDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodStartDate">recurrencePeriodStartDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrenceType">recurrenceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exportDataOptions`<sup>Required</sup> <a name="exportDataOptions" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataOptions"></a>

```java
public SubscriptionCostManagementExportExportDataOptionsOutputReference getExportDataOptions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference">SubscriptionCostManagementExportExportDataOptionsOutputReference</a>

---

##### `exportDataStorageLocation`<sup>Required</sup> <a name="exportDataStorageLocation" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataStorageLocation"></a>

```java
public SubscriptionCostManagementExportExportDataStorageLocationOutputReference getExportDataStorageLocation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference">SubscriptionCostManagementExportExportDataStorageLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.timeouts"></a>

```java
public SubscriptionCostManagementExportTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference">SubscriptionCostManagementExportTimeoutsOutputReference</a>

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.activeInput"></a>

```java
public java.lang.Object getActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exportDataOptionsInput`<sup>Optional</sup> <a name="exportDataOptionsInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataOptionsInput"></a>

```java
public SubscriptionCostManagementExportExportDataOptions getExportDataOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a>

---

##### `exportDataStorageLocationInput`<sup>Optional</sup> <a name="exportDataStorageLocationInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataStorageLocationInput"></a>

```java
public SubscriptionCostManagementExportExportDataStorageLocation getExportDataStorageLocationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recurrencePeriodEndDateInput`<sup>Optional</sup> <a name="recurrencePeriodEndDateInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodEndDateInput"></a>

```java
public java.lang.String getRecurrencePeriodEndDateInput();
```

- *Type:* java.lang.String

---

##### `recurrencePeriodStartDateInput`<sup>Optional</sup> <a name="recurrencePeriodStartDateInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodStartDateInput"></a>

```java
public java.lang.String getRecurrencePeriodStartDateInput();
```

- *Type:* java.lang.String

---

##### `recurrenceTypeInput`<sup>Optional</sup> <a name="recurrenceTypeInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrenceTypeInput"></a>

```java
public java.lang.String getRecurrenceTypeInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recurrencePeriodEndDate`<sup>Required</sup> <a name="recurrencePeriodEndDate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodEndDate"></a>

```java
public java.lang.String getRecurrencePeriodEndDate();
```

- *Type:* java.lang.String

---

##### `recurrencePeriodStartDate`<sup>Required</sup> <a name="recurrencePeriodStartDate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodStartDate"></a>

```java
public java.lang.String getRecurrencePeriodStartDate();
```

- *Type:* java.lang.String

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrenceType"></a>

```java
public java.lang.String getRecurrenceType();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SubscriptionCostManagementExportConfig <a name="SubscriptionCostManagementExportConfig" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_cost_management_export.SubscriptionCostManagementExportConfig;

SubscriptionCostManagementExportConfig.builder()
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
    .exportDataOptions(SubscriptionCostManagementExportExportDataOptions)
    .exportDataStorageLocation(SubscriptionCostManagementExportExportDataStorageLocation)
    .name(java.lang.String)
    .recurrencePeriodEndDate(java.lang.String)
    .recurrencePeriodStartDate(java.lang.String)
    .recurrenceType(java.lang.String)
    .subscriptionId(java.lang.String)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .id(java.lang.String)
//  .timeouts(SubscriptionCostManagementExportTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.exportDataOptions">exportDataOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a></code> | export_data_options block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.exportDataStorageLocation">exportDataStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a></code> | export_data_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#name SubscriptionCostManagementExport#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrencePeriodEndDate">recurrencePeriodEndDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#recurrence_period_end_date SubscriptionCostManagementExport#recurrence_period_end_date}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrencePeriodStartDate">recurrencePeriodStartDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#recurrence_period_start_date SubscriptionCostManagementExport#recurrence_period_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrenceType">recurrenceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#recurrence_type SubscriptionCostManagementExport#recurrence_type}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#subscription_id SubscriptionCostManagementExport#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#active SubscriptionCostManagementExport#active}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#id SubscriptionCostManagementExport#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exportDataOptions`<sup>Required</sup> <a name="exportDataOptions" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.exportDataOptions"></a>

```java
public SubscriptionCostManagementExportExportDataOptions getExportDataOptions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a>

export_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#export_data_options SubscriptionCostManagementExport#export_data_options}

---

##### `exportDataStorageLocation`<sup>Required</sup> <a name="exportDataStorageLocation" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.exportDataStorageLocation"></a>

```java
public SubscriptionCostManagementExportExportDataStorageLocation getExportDataStorageLocation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a>

export_data_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#export_data_storage_location SubscriptionCostManagementExport#export_data_storage_location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#name SubscriptionCostManagementExport#name}.

---

##### `recurrencePeriodEndDate`<sup>Required</sup> <a name="recurrencePeriodEndDate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrencePeriodEndDate"></a>

```java
public java.lang.String getRecurrencePeriodEndDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#recurrence_period_end_date SubscriptionCostManagementExport#recurrence_period_end_date}.

---

##### `recurrencePeriodStartDate`<sup>Required</sup> <a name="recurrencePeriodStartDate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrencePeriodStartDate"></a>

```java
public java.lang.String getRecurrencePeriodStartDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#recurrence_period_start_date SubscriptionCostManagementExport#recurrence_period_start_date}.

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrenceType"></a>

```java
public java.lang.String getRecurrenceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#recurrence_type SubscriptionCostManagementExport#recurrence_type}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#subscription_id SubscriptionCostManagementExport#subscription_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#active SubscriptionCostManagementExport#active}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#id SubscriptionCostManagementExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.timeouts"></a>

```java
public SubscriptionCostManagementExportTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#timeouts SubscriptionCostManagementExport#timeouts}

---

### SubscriptionCostManagementExportExportDataOptions <a name="SubscriptionCostManagementExportExportDataOptions" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_cost_management_export.SubscriptionCostManagementExportExportDataOptions;

SubscriptionCostManagementExportExportDataOptions.builder()
    .timeFrame(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.property.timeFrame">timeFrame</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#time_frame SubscriptionCostManagementExport#time_frame}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#type SubscriptionCostManagementExport#type}. |

---

##### `timeFrame`<sup>Required</sup> <a name="timeFrame" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.property.timeFrame"></a>

```java
public java.lang.String getTimeFrame();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#time_frame SubscriptionCostManagementExport#time_frame}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#type SubscriptionCostManagementExport#type}.

---

### SubscriptionCostManagementExportExportDataStorageLocation <a name="SubscriptionCostManagementExportExportDataStorageLocation" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_cost_management_export.SubscriptionCostManagementExportExportDataStorageLocation;

SubscriptionCostManagementExportExportDataStorageLocation.builder()
    .containerId(java.lang.String)
    .rootFolderPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.property.containerId">containerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#container_id SubscriptionCostManagementExport#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.property.rootFolderPath">rootFolderPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#root_folder_path SubscriptionCostManagementExport#root_folder_path}. |

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.property.containerId"></a>

```java
public java.lang.String getContainerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#container_id SubscriptionCostManagementExport#container_id}.

---

##### `rootFolderPath`<sup>Required</sup> <a name="rootFolderPath" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.property.rootFolderPath"></a>

```java
public java.lang.String getRootFolderPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#root_folder_path SubscriptionCostManagementExport#root_folder_path}.

---

### SubscriptionCostManagementExportTimeouts <a name="SubscriptionCostManagementExportTimeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_cost_management_export.SubscriptionCostManagementExportTimeouts;

SubscriptionCostManagementExportTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#create SubscriptionCostManagementExport#create}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#delete SubscriptionCostManagementExport#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#read SubscriptionCostManagementExport#read}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#update SubscriptionCostManagementExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#create SubscriptionCostManagementExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#delete SubscriptionCostManagementExport#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#read SubscriptionCostManagementExport#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/subscription_cost_management_export#update SubscriptionCostManagementExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubscriptionCostManagementExportExportDataOptionsOutputReference <a name="SubscriptionCostManagementExportExportDataOptionsOutputReference" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_cost_management_export.SubscriptionCostManagementExportExportDataOptionsOutputReference;

new SubscriptionCostManagementExportExportDataOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput">timeFrameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.timeFrame">timeFrame</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeFrameInput`<sup>Optional</sup> <a name="timeFrameInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput"></a>

```java
public java.lang.String getTimeFrameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `timeFrame`<sup>Required</sup> <a name="timeFrame" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.timeFrame"></a>

```java
public java.lang.String getTimeFrame();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.internalValue"></a>

```java
public SubscriptionCostManagementExportExportDataOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a>

---


### SubscriptionCostManagementExportExportDataStorageLocationOutputReference <a name="SubscriptionCostManagementExportExportDataStorageLocationOutputReference" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_cost_management_export.SubscriptionCostManagementExportExportDataStorageLocationOutputReference;

new SubscriptionCostManagementExportExportDataStorageLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput">containerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput">rootFolderPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.containerId">containerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath">rootFolderPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerIdInput`<sup>Optional</sup> <a name="containerIdInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput"></a>

```java
public java.lang.String getContainerIdInput();
```

- *Type:* java.lang.String

---

##### `rootFolderPathInput`<sup>Optional</sup> <a name="rootFolderPathInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput"></a>

```java
public java.lang.String getRootFolderPathInput();
```

- *Type:* java.lang.String

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.containerId"></a>

```java
public java.lang.String getContainerId();
```

- *Type:* java.lang.String

---

##### `rootFolderPath`<sup>Required</sup> <a name="rootFolderPath" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath"></a>

```java
public java.lang.String getRootFolderPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.internalValue"></a>

```java
public SubscriptionCostManagementExportExportDataStorageLocation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a>

---


### SubscriptionCostManagementExportTimeoutsOutputReference <a name="SubscriptionCostManagementExportTimeoutsOutputReference" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.subscription_cost_management_export.SubscriptionCostManagementExportTimeoutsOutputReference;

new SubscriptionCostManagementExportTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a>

---



