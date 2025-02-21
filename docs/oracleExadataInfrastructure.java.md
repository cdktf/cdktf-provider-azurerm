# `oracleExadataInfrastructure` Submodule <a name="`oracleExadataInfrastructure` Submodule" id="@cdktf/provider-azurerm.oracleExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleExadataInfrastructure <a name="OracleExadataInfrastructure" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure azurerm_oracle_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exadata_infrastructure.OracleExadataInfrastructure;

OracleExadataInfrastructure.Builder.create(Construct scope, java.lang.String id)
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
    .computeCount(java.lang.Number)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .shape(java.lang.String)
    .storageCount(java.lang.Number)
    .zones(java.util.List<java.lang.String>)
//  .customerContacts(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .maintenanceWindow(IResolvable)
//  .maintenanceWindow(java.util.List<OracleExadataInfrastructureMaintenanceWindow>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OracleExadataInfrastructureTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#compute_count OracleExadataInfrastructure#compute_count}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#display_name OracleExadataInfrastructure#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#location OracleExadataInfrastructure#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#name OracleExadataInfrastructure#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#resource_group_name OracleExadataInfrastructure#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#shape OracleExadataInfrastructure#shape}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.storageCount">storageCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#storage_count OracleExadataInfrastructure#storage_count}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#zones OracleExadataInfrastructure#zones}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.customerContacts">customerContacts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#customer_contacts OracleExadataInfrastructure#customer_contacts}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#id OracleExadataInfrastructure#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a>></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#tags OracleExadataInfrastructure#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts">OracleExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.computeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#compute_count OracleExadataInfrastructure#compute_count}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#display_name OracleExadataInfrastructure#display_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#location OracleExadataInfrastructure#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#name OracleExadataInfrastructure#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#resource_group_name OracleExadataInfrastructure#resource_group_name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.shape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#shape OracleExadataInfrastructure#shape}.

---

##### `storageCount`<sup>Required</sup> <a name="storageCount" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.storageCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#storage_count OracleExadataInfrastructure#storage_count}.

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.zones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#zones OracleExadataInfrastructure#zones}.

---

##### `customerContacts`<sup>Optional</sup> <a name="customerContacts" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.customerContacts"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#customer_contacts OracleExadataInfrastructure#customer_contacts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#id OracleExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.maintenanceWindow"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a>>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#maintenance_window OracleExadataInfrastructure#maintenance_window}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#tags OracleExadataInfrastructure#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts">OracleExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#timeouts OracleExadataInfrastructure#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetCustomerContacts">resetCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(IResolvable OR java.util.List<OracleExadataInfrastructureMaintenanceWindow> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.putMaintenanceWindow.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.putTimeouts"></a>

```java
public void putTimeouts(OracleExadataInfrastructureTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts">OracleExadataInfrastructureTimeouts</a>

---

##### `resetCustomerContacts` <a name="resetCustomerContacts" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetCustomerContacts"></a>

```java
public void resetCustomerContacts()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetId"></a>

```java
public void resetId()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OracleExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exadata_infrastructure.OracleExadataInfrastructure;

OracleExadataInfrastructure.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exadata_infrastructure.OracleExadataInfrastructure;

OracleExadataInfrastructure.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exadata_infrastructure.OracleExadataInfrastructure;

OracleExadataInfrastructure.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exadata_infrastructure.OracleExadataInfrastructure;

OracleExadataInfrastructure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OracleExadataInfrastructure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OracleExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OracleExadataInfrastructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OracleExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OracleExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList">OracleExadataInfrastructureMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference">OracleExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.computeCountInput">computeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.customerContactsInput">customerContactsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.storageCountInput">storageCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts">OracleExadataInfrastructureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.zonesInput">zonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.customerContacts">customerContacts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.storageCount">storageCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.maintenanceWindow"></a>

```java
public OracleExadataInfrastructureMaintenanceWindowList getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList">OracleExadataInfrastructureMaintenanceWindowList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.timeouts"></a>

```java
public OracleExadataInfrastructureTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference">OracleExadataInfrastructureTimeoutsOutputReference</a>

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.computeCountInput"></a>

```java
public java.lang.Number getComputeCountInput();
```

- *Type:* java.lang.Number

---

##### `customerContactsInput`<sup>Optional</sup> <a name="customerContactsInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.customerContactsInput"></a>

```java
public java.util.List<java.lang.String> getCustomerContactsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.maintenanceWindowInput"></a>

```java
public java.lang.Object getMaintenanceWindowInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `storageCountInput`<sup>Optional</sup> <a name="storageCountInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.storageCountInput"></a>

```java
public java.lang.Number getStorageCountInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts">OracleExadataInfrastructureTimeouts</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.zonesInput"></a>

```java
public java.util.List<java.lang.String> getZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.customerContacts"></a>

```java
public java.util.List<java.lang.String> getCustomerContacts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `storageCount`<sup>Required</sup> <a name="storageCount" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.storageCount"></a>

```java
public java.lang.Number getStorageCount();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructure.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OracleExadataInfrastructureConfig <a name="OracleExadataInfrastructureConfig" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exadata_infrastructure.OracleExadataInfrastructureConfig;

OracleExadataInfrastructureConfig.builder()
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
    .computeCount(java.lang.Number)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .shape(java.lang.String)
    .storageCount(java.lang.Number)
    .zones(java.util.List<java.lang.String>)
//  .customerContacts(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .maintenanceWindow(IResolvable)
//  .maintenanceWindow(java.util.List<OracleExadataInfrastructureMaintenanceWindow>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(OracleExadataInfrastructureTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#compute_count OracleExadataInfrastructure#compute_count}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#display_name OracleExadataInfrastructure#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#location OracleExadataInfrastructure#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#name OracleExadataInfrastructure#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#resource_group_name OracleExadataInfrastructure#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#shape OracleExadataInfrastructure#shape}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.storageCount">storageCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#storage_count OracleExadataInfrastructure#storage_count}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#zones OracleExadataInfrastructure#zones}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.customerContacts">customerContacts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#customer_contacts OracleExadataInfrastructure#customer_contacts}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#id OracleExadataInfrastructure#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a>></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#tags OracleExadataInfrastructure#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts">OracleExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#compute_count OracleExadataInfrastructure#compute_count}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#display_name OracleExadataInfrastructure#display_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#location OracleExadataInfrastructure#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#name OracleExadataInfrastructure#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#resource_group_name OracleExadataInfrastructure#resource_group_name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#shape OracleExadataInfrastructure#shape}.

---

##### `storageCount`<sup>Required</sup> <a name="storageCount" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.storageCount"></a>

```java
public java.lang.Number getStorageCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#storage_count OracleExadataInfrastructure#storage_count}.

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#zones OracleExadataInfrastructure#zones}.

---

##### `customerContacts`<sup>Optional</sup> <a name="customerContacts" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.customerContacts"></a>

```java
public java.util.List<java.lang.String> getCustomerContacts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#customer_contacts OracleExadataInfrastructure#customer_contacts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#id OracleExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.maintenanceWindow"></a>

```java
public java.lang.Object getMaintenanceWindow();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a>>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#maintenance_window OracleExadataInfrastructure#maintenance_window}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#tags OracleExadataInfrastructure#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureConfig.property.timeouts"></a>

```java
public OracleExadataInfrastructureTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts">OracleExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#timeouts OracleExadataInfrastructure#timeouts}

---

### OracleExadataInfrastructureMaintenanceWindow <a name="OracleExadataInfrastructureMaintenanceWindow" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exadata_infrastructure.OracleExadataInfrastructureMaintenanceWindow;

OracleExadataInfrastructureMaintenanceWindow.builder()
//  .daysOfWeek(java.util.List<java.lang.String>)
//  .hoursOfDay(java.util.List<java.lang.Number>)
//  .leadTimeInWeeks(java.lang.Number)
//  .months(java.util.List<java.lang.String>)
//  .patchingMode(java.lang.String)
//  .preference(java.lang.String)
//  .weeksOfMonth(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#days_of_week OracleExadataInfrastructure#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#hours_of_day OracleExadataInfrastructure#hours_of_day}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#lead_time_in_weeks OracleExadataInfrastructure#lead_time_in_weeks}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.months">months</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#months OracleExadataInfrastructure#months}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#patching_mode OracleExadataInfrastructure#patching_mode}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.preference">preference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#preference OracleExadataInfrastructure#preference}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#weeks_of_month OracleExadataInfrastructure#weeks_of_month}. |

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#days_of_week OracleExadataInfrastructure#days_of_week}.

---

##### `hoursOfDay`<sup>Optional</sup> <a name="hoursOfDay" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#hours_of_day OracleExadataInfrastructure#hours_of_day}.

---

##### `leadTimeInWeeks`<sup>Optional</sup> <a name="leadTimeInWeeks" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#lead_time_in_weeks OracleExadataInfrastructure#lead_time_in_weeks}.

---

##### `months`<sup>Optional</sup> <a name="months" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.months"></a>

```java
public java.util.List<java.lang.String> getMonths();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#months OracleExadataInfrastructure#months}.

---

##### `patchingMode`<sup>Optional</sup> <a name="patchingMode" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#patching_mode OracleExadataInfrastructure#patching_mode}.

---

##### `preference`<sup>Optional</sup> <a name="preference" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#preference OracleExadataInfrastructure#preference}.

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#weeks_of_month OracleExadataInfrastructure#weeks_of_month}.

---

### OracleExadataInfrastructureTimeouts <a name="OracleExadataInfrastructureTimeouts" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exadata_infrastructure.OracleExadataInfrastructureTimeouts;

OracleExadataInfrastructureTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#create OracleExadataInfrastructure#create}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#delete OracleExadataInfrastructure#delete}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#read OracleExadataInfrastructure#read}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#update OracleExadataInfrastructure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#create OracleExadataInfrastructure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#delete OracleExadataInfrastructure#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#read OracleExadataInfrastructure#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/oracle_exadata_infrastructure#update OracleExadataInfrastructure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleExadataInfrastructureMaintenanceWindowList <a name="OracleExadataInfrastructureMaintenanceWindowList" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exadata_infrastructure.OracleExadataInfrastructureMaintenanceWindowList;

new OracleExadataInfrastructureMaintenanceWindowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.get"></a>

```java
public OracleExadataInfrastructureMaintenanceWindowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a>>

---


### OracleExadataInfrastructureMaintenanceWindowOutputReference <a name="OracleExadataInfrastructureMaintenanceWindowOutputReference" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exadata_infrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference;

new OracleExadataInfrastructureMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay">resetHoursOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks">resetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetMonths">resetMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode">resetPatchingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetPreference">resetPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```

##### `resetHoursOfDay` <a name="resetHoursOfDay" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```java
public void resetHoursOfDay()
```

##### `resetLeadTimeInWeeks` <a name="resetLeadTimeInWeeks" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks"></a>

```java
public void resetLeadTimeInWeeks()
```

##### `resetMonths` <a name="resetMonths" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetMonths"></a>

```java
public void resetMonths()
```

##### `resetPatchingMode` <a name="resetPatchingMode" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode"></a>

```java
public void resetPatchingMode()
```

##### `resetPreference` <a name="resetPreference" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetPreference"></a>

```java
public void resetPreference()
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```java
public void resetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput">hoursOfDayInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput">leadTimeInWeeksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput">monthsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput">patchingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.months">months</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeekInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hoursOfDayInput`<sup>Optional</sup> <a name="hoursOfDayInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDayInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `leadTimeInWeeksInput`<sup>Optional</sup> <a name="leadTimeInWeeksInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput"></a>

```java
public java.lang.Number getLeadTimeInWeeksInput();
```

- *Type:* java.lang.Number

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput"></a>

```java
public java.util.List<java.lang.String> getMonthsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `patchingModeInput`<sup>Optional</sup> <a name="patchingModeInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput"></a>

```java
public java.lang.String getPatchingModeInput();
```

- *Type:* java.lang.String

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput"></a>

```java
public java.lang.String getPreferenceInput();
```

- *Type:* java.lang.String

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonthInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.months"></a>

```java
public java.util.List<java.lang.String> getMonths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureMaintenanceWindow">OracleExadataInfrastructureMaintenanceWindow</a>

---


### OracleExadataInfrastructureTimeoutsOutputReference <a name="OracleExadataInfrastructureTimeoutsOutputReference" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.oracle_exadata_infrastructure.OracleExadataInfrastructureTimeoutsOutputReference;

new OracleExadataInfrastructureTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts">OracleExadataInfrastructureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.oracleExadataInfrastructure.OracleExadataInfrastructureTimeouts">OracleExadataInfrastructureTimeouts</a>

---



