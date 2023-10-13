# `azurerm_resource_group_cost_management_export`

Refer to the Terraform Registory for docs: [`azurerm_resource_group_cost_management_export`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export).

# `resourceGroupCostManagementExport` Submodule <a name="`resourceGroupCostManagementExport` Submodule" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceGroupCostManagementExport <a name="ResourceGroupCostManagementExport" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export azurerm_resource_group_cost_management_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_export.ResourceGroupCostManagementExport;

ResourceGroupCostManagementExport.Builder.create(Construct scope, java.lang.String id)
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
    .exportDataOptions(ResourceGroupCostManagementExportExportDataOptions)
    .exportDataStorageLocation(ResourceGroupCostManagementExportExportDataStorageLocation)
    .name(java.lang.String)
    .recurrencePeriodEndDate(java.lang.String)
    .recurrencePeriodStartDate(java.lang.String)
    .recurrenceType(java.lang.String)
    .resourceGroupId(java.lang.String)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .id(java.lang.String)
//  .timeouts(ResourceGroupCostManagementExportTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.exportDataOptions">exportDataOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a></code> | export_data_options block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.exportDataStorageLocation">exportDataStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a></code> | export_data_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#name ResourceGroupCostManagementExport#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.recurrencePeriodEndDate">recurrencePeriodEndDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#recurrence_period_end_date ResourceGroupCostManagementExport#recurrence_period_end_date}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.recurrencePeriodStartDate">recurrencePeriodStartDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#recurrence_period_start_date ResourceGroupCostManagementExport#recurrence_period_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.recurrenceType">recurrenceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#recurrence_type ResourceGroupCostManagementExport#recurrence_type}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#resource_group_id ResourceGroupCostManagementExport#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#active ResourceGroupCostManagementExport#active}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#id ResourceGroupCostManagementExport#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exportDataOptions`<sup>Required</sup> <a name="exportDataOptions" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.exportDataOptions"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a>

export_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#export_data_options ResourceGroupCostManagementExport#export_data_options}

---

##### `exportDataStorageLocation`<sup>Required</sup> <a name="exportDataStorageLocation" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.exportDataStorageLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a>

export_data_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#export_data_storage_location ResourceGroupCostManagementExport#export_data_storage_location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#name ResourceGroupCostManagementExport#name}.

---

##### `recurrencePeriodEndDate`<sup>Required</sup> <a name="recurrencePeriodEndDate" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.recurrencePeriodEndDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#recurrence_period_end_date ResourceGroupCostManagementExport#recurrence_period_end_date}.

---

##### `recurrencePeriodStartDate`<sup>Required</sup> <a name="recurrencePeriodStartDate" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.recurrencePeriodStartDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#recurrence_period_start_date ResourceGroupCostManagementExport#recurrence_period_start_date}.

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.recurrenceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#recurrence_type ResourceGroupCostManagementExport#recurrence_type}.

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.resourceGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#resource_group_id ResourceGroupCostManagementExport#resource_group_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#active ResourceGroupCostManagementExport#active}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#id ResourceGroupCostManagementExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#timeouts ResourceGroupCostManagementExport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataOptions">putExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataStorageLocation">putExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putExportDataOptions` <a name="putExportDataOptions" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataOptions"></a>

```java
public void putExportDataOptions(ResourceGroupCostManagementExportExportDataOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a>

---

##### `putExportDataStorageLocation` <a name="putExportDataStorageLocation" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataStorageLocation"></a>

```java
public void putExportDataStorageLocation(ResourceGroupCostManagementExportExportDataStorageLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putExportDataStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putTimeouts"></a>

```java
public void putTimeouts(ResourceGroupCostManagementExportTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a>

---

##### `resetActive` <a name="resetActive" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetActive"></a>

```java
public void resetActive()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_export.ResourceGroupCostManagementExport;

ResourceGroupCostManagementExport.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_export.ResourceGroupCostManagementExport;

ResourceGroupCostManagementExport.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_export.ResourceGroupCostManagementExport;

ResourceGroupCostManagementExport.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataOptions">exportDataOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference">ResourceGroupCostManagementExportExportDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataStorageLocation">exportDataStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference">ResourceGroupCostManagementExportExportDataStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference">ResourceGroupCostManagementExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataOptionsInput">exportDataOptionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataStorageLocationInput">exportDataStorageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodEndDateInput">recurrencePeriodEndDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodStartDateInput">recurrencePeriodStartDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrenceTypeInput">recurrenceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.resourceGroupIdInput">resourceGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodEndDate">recurrencePeriodEndDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodStartDate">recurrencePeriodStartDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrenceType">recurrenceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exportDataOptions`<sup>Required</sup> <a name="exportDataOptions" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataOptions"></a>

```java
public ResourceGroupCostManagementExportExportDataOptionsOutputReference getExportDataOptions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference">ResourceGroupCostManagementExportExportDataOptionsOutputReference</a>

---

##### `exportDataStorageLocation`<sup>Required</sup> <a name="exportDataStorageLocation" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataStorageLocation"></a>

```java
public ResourceGroupCostManagementExportExportDataStorageLocationOutputReference getExportDataStorageLocation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference">ResourceGroupCostManagementExportExportDataStorageLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.timeouts"></a>

```java
public ResourceGroupCostManagementExportTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference">ResourceGroupCostManagementExportTimeoutsOutputReference</a>

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.activeInput"></a>

```java
public java.lang.Object getActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exportDataOptionsInput`<sup>Optional</sup> <a name="exportDataOptionsInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataOptionsInput"></a>

```java
public ResourceGroupCostManagementExportExportDataOptions getExportDataOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a>

---

##### `exportDataStorageLocationInput`<sup>Optional</sup> <a name="exportDataStorageLocationInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.exportDataStorageLocationInput"></a>

```java
public ResourceGroupCostManagementExportExportDataStorageLocation getExportDataStorageLocationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recurrencePeriodEndDateInput`<sup>Optional</sup> <a name="recurrencePeriodEndDateInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodEndDateInput"></a>

```java
public java.lang.String getRecurrencePeriodEndDateInput();
```

- *Type:* java.lang.String

---

##### `recurrencePeriodStartDateInput`<sup>Optional</sup> <a name="recurrencePeriodStartDateInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodStartDateInput"></a>

```java
public java.lang.String getRecurrencePeriodStartDateInput();
```

- *Type:* java.lang.String

---

##### `recurrenceTypeInput`<sup>Optional</sup> <a name="recurrenceTypeInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrenceTypeInput"></a>

```java
public java.lang.String getRecurrenceTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupIdInput`<sup>Optional</sup> <a name="resourceGroupIdInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.resourceGroupIdInput"></a>

```java
public java.lang.String getResourceGroupIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recurrencePeriodEndDate`<sup>Required</sup> <a name="recurrencePeriodEndDate" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodEndDate"></a>

```java
public java.lang.String getRecurrencePeriodEndDate();
```

- *Type:* java.lang.String

---

##### `recurrencePeriodStartDate`<sup>Required</sup> <a name="recurrencePeriodStartDate" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrencePeriodStartDate"></a>

```java
public java.lang.String getRecurrencePeriodStartDate();
```

- *Type:* java.lang.String

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.recurrenceType"></a>

```java
public java.lang.String getRecurrenceType();
```

- *Type:* java.lang.String

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.resourceGroupId"></a>

```java
public java.lang.String getResourceGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExport.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceGroupCostManagementExportConfig <a name="ResourceGroupCostManagementExportConfig" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_export.ResourceGroupCostManagementExportConfig;

ResourceGroupCostManagementExportConfig.builder()
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
    .exportDataOptions(ResourceGroupCostManagementExportExportDataOptions)
    .exportDataStorageLocation(ResourceGroupCostManagementExportExportDataStorageLocation)
    .name(java.lang.String)
    .recurrencePeriodEndDate(java.lang.String)
    .recurrencePeriodStartDate(java.lang.String)
    .recurrenceType(java.lang.String)
    .resourceGroupId(java.lang.String)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .id(java.lang.String)
//  .timeouts(ResourceGroupCostManagementExportTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.exportDataOptions">exportDataOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a></code> | export_data_options block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.exportDataStorageLocation">exportDataStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a></code> | export_data_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#name ResourceGroupCostManagementExport#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrencePeriodEndDate">recurrencePeriodEndDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#recurrence_period_end_date ResourceGroupCostManagementExport#recurrence_period_end_date}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrencePeriodStartDate">recurrencePeriodStartDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#recurrence_period_start_date ResourceGroupCostManagementExport#recurrence_period_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrenceType">recurrenceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#recurrence_type ResourceGroupCostManagementExport#recurrence_type}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#resource_group_id ResourceGroupCostManagementExport#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#active ResourceGroupCostManagementExport#active}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#id ResourceGroupCostManagementExport#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exportDataOptions`<sup>Required</sup> <a name="exportDataOptions" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.exportDataOptions"></a>

```java
public ResourceGroupCostManagementExportExportDataOptions getExportDataOptions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a>

export_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#export_data_options ResourceGroupCostManagementExport#export_data_options}

---

##### `exportDataStorageLocation`<sup>Required</sup> <a name="exportDataStorageLocation" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.exportDataStorageLocation"></a>

```java
public ResourceGroupCostManagementExportExportDataStorageLocation getExportDataStorageLocation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a>

export_data_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#export_data_storage_location ResourceGroupCostManagementExport#export_data_storage_location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#name ResourceGroupCostManagementExport#name}.

---

##### `recurrencePeriodEndDate`<sup>Required</sup> <a name="recurrencePeriodEndDate" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrencePeriodEndDate"></a>

```java
public java.lang.String getRecurrencePeriodEndDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#recurrence_period_end_date ResourceGroupCostManagementExport#recurrence_period_end_date}.

---

##### `recurrencePeriodStartDate`<sup>Required</sup> <a name="recurrencePeriodStartDate" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrencePeriodStartDate"></a>

```java
public java.lang.String getRecurrencePeriodStartDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#recurrence_period_start_date ResourceGroupCostManagementExport#recurrence_period_start_date}.

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.recurrenceType"></a>

```java
public java.lang.String getRecurrenceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#recurrence_type ResourceGroupCostManagementExport#recurrence_type}.

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.resourceGroupId"></a>

```java
public java.lang.String getResourceGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#resource_group_id ResourceGroupCostManagementExport#resource_group_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#active ResourceGroupCostManagementExport#active}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#id ResourceGroupCostManagementExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportConfig.property.timeouts"></a>

```java
public ResourceGroupCostManagementExportTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#timeouts ResourceGroupCostManagementExport#timeouts}

---

### ResourceGroupCostManagementExportExportDataOptions <a name="ResourceGroupCostManagementExportExportDataOptions" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_export.ResourceGroupCostManagementExportExportDataOptions;

ResourceGroupCostManagementExportExportDataOptions.builder()
    .timeFrame(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.property.timeFrame">timeFrame</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#time_frame ResourceGroupCostManagementExport#time_frame}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#type ResourceGroupCostManagementExport#type}. |

---

##### `timeFrame`<sup>Required</sup> <a name="timeFrame" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.property.timeFrame"></a>

```java
public java.lang.String getTimeFrame();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#time_frame ResourceGroupCostManagementExport#time_frame}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#type ResourceGroupCostManagementExport#type}.

---

### ResourceGroupCostManagementExportExportDataStorageLocation <a name="ResourceGroupCostManagementExportExportDataStorageLocation" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_export.ResourceGroupCostManagementExportExportDataStorageLocation;

ResourceGroupCostManagementExportExportDataStorageLocation.builder()
    .containerId(java.lang.String)
    .rootFolderPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.property.containerId">containerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#container_id ResourceGroupCostManagementExport#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.property.rootFolderPath">rootFolderPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#root_folder_path ResourceGroupCostManagementExport#root_folder_path}. |

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.property.containerId"></a>

```java
public java.lang.String getContainerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#container_id ResourceGroupCostManagementExport#container_id}.

---

##### `rootFolderPath`<sup>Required</sup> <a name="rootFolderPath" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation.property.rootFolderPath"></a>

```java
public java.lang.String getRootFolderPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#root_folder_path ResourceGroupCostManagementExport#root_folder_path}.

---

### ResourceGroupCostManagementExportTimeouts <a name="ResourceGroupCostManagementExportTimeouts" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_export.ResourceGroupCostManagementExportTimeouts;

ResourceGroupCostManagementExportTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#create ResourceGroupCostManagementExport#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#delete ResourceGroupCostManagementExport#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#read ResourceGroupCostManagementExport#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#update ResourceGroupCostManagementExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#create ResourceGroupCostManagementExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#delete ResourceGroupCostManagementExport#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#read ResourceGroupCostManagementExport#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/resource_group_cost_management_export#update ResourceGroupCostManagementExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceGroupCostManagementExportExportDataOptionsOutputReference <a name="ResourceGroupCostManagementExportExportDataOptionsOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_export.ResourceGroupCostManagementExportExportDataOptionsOutputReference;

new ResourceGroupCostManagementExportExportDataOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput">timeFrameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.timeFrame">timeFrame</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeFrameInput`<sup>Optional</sup> <a name="timeFrameInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput"></a>

```java
public java.lang.String getTimeFrameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `timeFrame`<sup>Required</sup> <a name="timeFrame" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.timeFrame"></a>

```java
public java.lang.String getTimeFrame();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptionsOutputReference.property.internalValue"></a>

```java
public ResourceGroupCostManagementExportExportDataOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataOptions">ResourceGroupCostManagementExportExportDataOptions</a>

---


### ResourceGroupCostManagementExportExportDataStorageLocationOutputReference <a name="ResourceGroupCostManagementExportExportDataStorageLocationOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_export.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference;

new ResourceGroupCostManagementExportExportDataStorageLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput">containerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput">rootFolderPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.containerId">containerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath">rootFolderPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerIdInput`<sup>Optional</sup> <a name="containerIdInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput"></a>

```java
public java.lang.String getContainerIdInput();
```

- *Type:* java.lang.String

---

##### `rootFolderPathInput`<sup>Optional</sup> <a name="rootFolderPathInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput"></a>

```java
public java.lang.String getRootFolderPathInput();
```

- *Type:* java.lang.String

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.containerId"></a>

```java
public java.lang.String getContainerId();
```

- *Type:* java.lang.String

---

##### `rootFolderPath`<sup>Required</sup> <a name="rootFolderPath" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath"></a>

```java
public java.lang.String getRootFolderPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocationOutputReference.property.internalValue"></a>

```java
public ResourceGroupCostManagementExportExportDataStorageLocation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportExportDataStorageLocation">ResourceGroupCostManagementExportExportDataStorageLocation</a>

---


### ResourceGroupCostManagementExportTimeoutsOutputReference <a name="ResourceGroupCostManagementExportTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_group_cost_management_export.ResourceGroupCostManagementExportTimeoutsOutputReference;

new ResourceGroupCostManagementExportTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceGroupCostManagementExport.ResourceGroupCostManagementExportTimeouts">ResourceGroupCostManagementExportTimeouts</a>

---



