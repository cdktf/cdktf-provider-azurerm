# `azurerm_billing_account_cost_management_export`

Refer to the Terraform Registory for docs: [`azurerm_billing_account_cost_management_export`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export).

# `billingAccountCostManagementExport` Submodule <a name="`billingAccountCostManagementExport` Submodule" id="@cdktf/provider-azurerm.billingAccountCostManagementExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingAccountCostManagementExport <a name="BillingAccountCostManagementExport" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export azurerm_billing_account_cost_management_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.billing_account_cost_management_export.BillingAccountCostManagementExport;

BillingAccountCostManagementExport.Builder.create(Construct scope, java.lang.String id)
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
    .billingAccountId(java.lang.String)
    .exportDataOptions(BillingAccountCostManagementExportExportDataOptions)
    .exportDataStorageLocation(BillingAccountCostManagementExportExportDataStorageLocation)
    .name(java.lang.String)
    .recurrencePeriodEndDate(java.lang.String)
    .recurrencePeriodStartDate(java.lang.String)
    .recurrenceType(java.lang.String)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .id(java.lang.String)
//  .timeouts(BillingAccountCostManagementExportTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.billingAccountId">billingAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#billing_account_id BillingAccountCostManagementExport#billing_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.exportDataOptions">exportDataOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a></code> | export_data_options block. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.exportDataStorageLocation">exportDataStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a></code> | export_data_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#name BillingAccountCostManagementExport#name}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.recurrencePeriodEndDate">recurrencePeriodEndDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#recurrence_period_end_date BillingAccountCostManagementExport#recurrence_period_end_date}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.recurrencePeriodStartDate">recurrencePeriodStartDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#recurrence_period_start_date BillingAccountCostManagementExport#recurrence_period_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.recurrenceType">recurrenceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#recurrence_type BillingAccountCostManagementExport#recurrence_type}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#active BillingAccountCostManagementExport#active}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#id BillingAccountCostManagementExport#id}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `billingAccountId`<sup>Required</sup> <a name="billingAccountId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.billingAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#billing_account_id BillingAccountCostManagementExport#billing_account_id}.

---

##### `exportDataOptions`<sup>Required</sup> <a name="exportDataOptions" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.exportDataOptions"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a>

export_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#export_data_options BillingAccountCostManagementExport#export_data_options}

---

##### `exportDataStorageLocation`<sup>Required</sup> <a name="exportDataStorageLocation" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.exportDataStorageLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a>

export_data_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#export_data_storage_location BillingAccountCostManagementExport#export_data_storage_location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#name BillingAccountCostManagementExport#name}.

---

##### `recurrencePeriodEndDate`<sup>Required</sup> <a name="recurrencePeriodEndDate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.recurrencePeriodEndDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#recurrence_period_end_date BillingAccountCostManagementExport#recurrence_period_end_date}.

---

##### `recurrencePeriodStartDate`<sup>Required</sup> <a name="recurrencePeriodStartDate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.recurrencePeriodStartDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#recurrence_period_start_date BillingAccountCostManagementExport#recurrence_period_start_date}.

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.recurrenceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#recurrence_type BillingAccountCostManagementExport#recurrence_type}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#active BillingAccountCostManagementExport#active}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#id BillingAccountCostManagementExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#timeouts BillingAccountCostManagementExport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataOptions">putExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataStorageLocation">putExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putExportDataOptions` <a name="putExportDataOptions" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataOptions"></a>

```java
public void putExportDataOptions(BillingAccountCostManagementExportExportDataOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a>

---

##### `putExportDataStorageLocation` <a name="putExportDataStorageLocation" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataStorageLocation"></a>

```java
public void putExportDataStorageLocation(BillingAccountCostManagementExportExportDataStorageLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putExportDataStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putTimeouts"></a>

```java
public void putTimeouts(BillingAccountCostManagementExportTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a>

---

##### `resetActive` <a name="resetActive" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetActive"></a>

```java
public void resetActive()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.billing_account_cost_management_export.BillingAccountCostManagementExport;

BillingAccountCostManagementExport.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.billing_account_cost_management_export.BillingAccountCostManagementExport;

BillingAccountCostManagementExport.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.billing_account_cost_management_export.BillingAccountCostManagementExport;

BillingAccountCostManagementExport.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataOptions">exportDataOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference">BillingAccountCostManagementExportExportDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataStorageLocation">exportDataStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference">BillingAccountCostManagementExportExportDataStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference">BillingAccountCostManagementExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.billingAccountIdInput">billingAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataOptionsInput">exportDataOptionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataStorageLocationInput">exportDataStorageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodEndDateInput">recurrencePeriodEndDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodStartDateInput">recurrencePeriodStartDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrenceTypeInput">recurrenceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.billingAccountId">billingAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodEndDate">recurrencePeriodEndDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodStartDate">recurrencePeriodStartDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrenceType">recurrenceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exportDataOptions`<sup>Required</sup> <a name="exportDataOptions" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataOptions"></a>

```java
public BillingAccountCostManagementExportExportDataOptionsOutputReference getExportDataOptions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference">BillingAccountCostManagementExportExportDataOptionsOutputReference</a>

---

##### `exportDataStorageLocation`<sup>Required</sup> <a name="exportDataStorageLocation" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataStorageLocation"></a>

```java
public BillingAccountCostManagementExportExportDataStorageLocationOutputReference getExportDataStorageLocation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference">BillingAccountCostManagementExportExportDataStorageLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.timeouts"></a>

```java
public BillingAccountCostManagementExportTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference">BillingAccountCostManagementExportTimeoutsOutputReference</a>

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.activeInput"></a>

```java
public java.lang.Object getActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `billingAccountIdInput`<sup>Optional</sup> <a name="billingAccountIdInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.billingAccountIdInput"></a>

```java
public java.lang.String getBillingAccountIdInput();
```

- *Type:* java.lang.String

---

##### `exportDataOptionsInput`<sup>Optional</sup> <a name="exportDataOptionsInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataOptionsInput"></a>

```java
public BillingAccountCostManagementExportExportDataOptions getExportDataOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a>

---

##### `exportDataStorageLocationInput`<sup>Optional</sup> <a name="exportDataStorageLocationInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.exportDataStorageLocationInput"></a>

```java
public BillingAccountCostManagementExportExportDataStorageLocation getExportDataStorageLocationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recurrencePeriodEndDateInput`<sup>Optional</sup> <a name="recurrencePeriodEndDateInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodEndDateInput"></a>

```java
public java.lang.String getRecurrencePeriodEndDateInput();
```

- *Type:* java.lang.String

---

##### `recurrencePeriodStartDateInput`<sup>Optional</sup> <a name="recurrencePeriodStartDateInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodStartDateInput"></a>

```java
public java.lang.String getRecurrencePeriodStartDateInput();
```

- *Type:* java.lang.String

---

##### `recurrenceTypeInput`<sup>Optional</sup> <a name="recurrenceTypeInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrenceTypeInput"></a>

```java
public java.lang.String getRecurrenceTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `billingAccountId`<sup>Required</sup> <a name="billingAccountId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.billingAccountId"></a>

```java
public java.lang.String getBillingAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recurrencePeriodEndDate`<sup>Required</sup> <a name="recurrencePeriodEndDate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodEndDate"></a>

```java
public java.lang.String getRecurrencePeriodEndDate();
```

- *Type:* java.lang.String

---

##### `recurrencePeriodStartDate`<sup>Required</sup> <a name="recurrencePeriodStartDate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrencePeriodStartDate"></a>

```java
public java.lang.String getRecurrencePeriodStartDate();
```

- *Type:* java.lang.String

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.recurrenceType"></a>

```java
public java.lang.String getRecurrenceType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExport.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BillingAccountCostManagementExportConfig <a name="BillingAccountCostManagementExportConfig" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.billing_account_cost_management_export.BillingAccountCostManagementExportConfig;

BillingAccountCostManagementExportConfig.builder()
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
    .billingAccountId(java.lang.String)
    .exportDataOptions(BillingAccountCostManagementExportExportDataOptions)
    .exportDataStorageLocation(BillingAccountCostManagementExportExportDataStorageLocation)
    .name(java.lang.String)
    .recurrencePeriodEndDate(java.lang.String)
    .recurrencePeriodStartDate(java.lang.String)
    .recurrenceType(java.lang.String)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .id(java.lang.String)
//  .timeouts(BillingAccountCostManagementExportTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.billingAccountId">billingAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#billing_account_id BillingAccountCostManagementExport#billing_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.exportDataOptions">exportDataOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a></code> | export_data_options block. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.exportDataStorageLocation">exportDataStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a></code> | export_data_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#name BillingAccountCostManagementExport#name}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrencePeriodEndDate">recurrencePeriodEndDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#recurrence_period_end_date BillingAccountCostManagementExport#recurrence_period_end_date}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrencePeriodStartDate">recurrencePeriodStartDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#recurrence_period_start_date BillingAccountCostManagementExport#recurrence_period_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrenceType">recurrenceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#recurrence_type BillingAccountCostManagementExport#recurrence_type}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#active BillingAccountCostManagementExport#active}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#id BillingAccountCostManagementExport#id}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `billingAccountId`<sup>Required</sup> <a name="billingAccountId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.billingAccountId"></a>

```java
public java.lang.String getBillingAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#billing_account_id BillingAccountCostManagementExport#billing_account_id}.

---

##### `exportDataOptions`<sup>Required</sup> <a name="exportDataOptions" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.exportDataOptions"></a>

```java
public BillingAccountCostManagementExportExportDataOptions getExportDataOptions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a>

export_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#export_data_options BillingAccountCostManagementExport#export_data_options}

---

##### `exportDataStorageLocation`<sup>Required</sup> <a name="exportDataStorageLocation" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.exportDataStorageLocation"></a>

```java
public BillingAccountCostManagementExportExportDataStorageLocation getExportDataStorageLocation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a>

export_data_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#export_data_storage_location BillingAccountCostManagementExport#export_data_storage_location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#name BillingAccountCostManagementExport#name}.

---

##### `recurrencePeriodEndDate`<sup>Required</sup> <a name="recurrencePeriodEndDate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrencePeriodEndDate"></a>

```java
public java.lang.String getRecurrencePeriodEndDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#recurrence_period_end_date BillingAccountCostManagementExport#recurrence_period_end_date}.

---

##### `recurrencePeriodStartDate`<sup>Required</sup> <a name="recurrencePeriodStartDate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrencePeriodStartDate"></a>

```java
public java.lang.String getRecurrencePeriodStartDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#recurrence_period_start_date BillingAccountCostManagementExport#recurrence_period_start_date}.

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.recurrenceType"></a>

```java
public java.lang.String getRecurrenceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#recurrence_type BillingAccountCostManagementExport#recurrence_type}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#active BillingAccountCostManagementExport#active}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#id BillingAccountCostManagementExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportConfig.property.timeouts"></a>

```java
public BillingAccountCostManagementExportTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#timeouts BillingAccountCostManagementExport#timeouts}

---

### BillingAccountCostManagementExportExportDataOptions <a name="BillingAccountCostManagementExportExportDataOptions" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.billing_account_cost_management_export.BillingAccountCostManagementExportExportDataOptions;

BillingAccountCostManagementExportExportDataOptions.builder()
    .timeFrame(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.property.timeFrame">timeFrame</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#time_frame BillingAccountCostManagementExport#time_frame}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#type BillingAccountCostManagementExport#type}. |

---

##### `timeFrame`<sup>Required</sup> <a name="timeFrame" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.property.timeFrame"></a>

```java
public java.lang.String getTimeFrame();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#time_frame BillingAccountCostManagementExport#time_frame}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#type BillingAccountCostManagementExport#type}.

---

### BillingAccountCostManagementExportExportDataStorageLocation <a name="BillingAccountCostManagementExportExportDataStorageLocation" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.billing_account_cost_management_export.BillingAccountCostManagementExportExportDataStorageLocation;

BillingAccountCostManagementExportExportDataStorageLocation.builder()
    .containerId(java.lang.String)
    .rootFolderPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.property.containerId">containerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#container_id BillingAccountCostManagementExport#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.property.rootFolderPath">rootFolderPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#root_folder_path BillingAccountCostManagementExport#root_folder_path}. |

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.property.containerId"></a>

```java
public java.lang.String getContainerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#container_id BillingAccountCostManagementExport#container_id}.

---

##### `rootFolderPath`<sup>Required</sup> <a name="rootFolderPath" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation.property.rootFolderPath"></a>

```java
public java.lang.String getRootFolderPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#root_folder_path BillingAccountCostManagementExport#root_folder_path}.

---

### BillingAccountCostManagementExportTimeouts <a name="BillingAccountCostManagementExportTimeouts" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.billing_account_cost_management_export.BillingAccountCostManagementExportTimeouts;

BillingAccountCostManagementExportTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#create BillingAccountCostManagementExport#create}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#delete BillingAccountCostManagementExport#delete}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#read BillingAccountCostManagementExport#read}. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#update BillingAccountCostManagementExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#create BillingAccountCostManagementExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#delete BillingAccountCostManagementExport#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#read BillingAccountCostManagementExport#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/billing_account_cost_management_export#update BillingAccountCostManagementExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingAccountCostManagementExportExportDataOptionsOutputReference <a name="BillingAccountCostManagementExportExportDataOptionsOutputReference" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.billing_account_cost_management_export.BillingAccountCostManagementExportExportDataOptionsOutputReference;

new BillingAccountCostManagementExportExportDataOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput">timeFrameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.timeFrame">timeFrame</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeFrameInput`<sup>Optional</sup> <a name="timeFrameInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput"></a>

```java
public java.lang.String getTimeFrameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `timeFrame`<sup>Required</sup> <a name="timeFrame" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.timeFrame"></a>

```java
public java.lang.String getTimeFrame();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptionsOutputReference.property.internalValue"></a>

```java
public BillingAccountCostManagementExportExportDataOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataOptions">BillingAccountCostManagementExportExportDataOptions</a>

---


### BillingAccountCostManagementExportExportDataStorageLocationOutputReference <a name="BillingAccountCostManagementExportExportDataStorageLocationOutputReference" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.billing_account_cost_management_export.BillingAccountCostManagementExportExportDataStorageLocationOutputReference;

new BillingAccountCostManagementExportExportDataStorageLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput">containerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput">rootFolderPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.containerId">containerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath">rootFolderPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerIdInput`<sup>Optional</sup> <a name="containerIdInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput"></a>

```java
public java.lang.String getContainerIdInput();
```

- *Type:* java.lang.String

---

##### `rootFolderPathInput`<sup>Optional</sup> <a name="rootFolderPathInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput"></a>

```java
public java.lang.String getRootFolderPathInput();
```

- *Type:* java.lang.String

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.containerId"></a>

```java
public java.lang.String getContainerId();
```

- *Type:* java.lang.String

---

##### `rootFolderPath`<sup>Required</sup> <a name="rootFolderPath" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath"></a>

```java
public java.lang.String getRootFolderPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocationOutputReference.property.internalValue"></a>

```java
public BillingAccountCostManagementExportExportDataStorageLocation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportExportDataStorageLocation">BillingAccountCostManagementExportExportDataStorageLocation</a>

---


### BillingAccountCostManagementExportTimeoutsOutputReference <a name="BillingAccountCostManagementExportTimeoutsOutputReference" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.billing_account_cost_management_export.BillingAccountCostManagementExportTimeoutsOutputReference;

new BillingAccountCostManagementExportTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.billingAccountCostManagementExport.BillingAccountCostManagementExportTimeouts">BillingAccountCostManagementExportTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



