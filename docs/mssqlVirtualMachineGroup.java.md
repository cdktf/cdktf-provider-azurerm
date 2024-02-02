# `mssqlVirtualMachineGroup` Submodule <a name="`mssqlVirtualMachineGroup` Submodule" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlVirtualMachineGroup <a name="MssqlVirtualMachineGroup" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group azurerm_mssql_virtual_machine_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_group.MssqlVirtualMachineGroup;

MssqlVirtualMachineGroup.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sqlImageOffer(java.lang.String)
    .sqlImageSku(java.lang.String)
    .wsfcDomainProfile(MssqlVirtualMachineGroupWsfcDomainProfile)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MssqlVirtualMachineGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#location MssqlVirtualMachineGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#name MssqlVirtualMachineGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#resource_group_name MssqlVirtualMachineGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.sqlImageOffer">sqlImageOffer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#sql_image_offer MssqlVirtualMachineGroup#sql_image_offer}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.sqlImageSku">sqlImageSku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#sql_image_sku MssqlVirtualMachineGroup#sql_image_sku}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.wsfcDomainProfile">wsfcDomainProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a></code> | wsfc_domain_profile block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#id MssqlVirtualMachineGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#tags MssqlVirtualMachineGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#location MssqlVirtualMachineGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#name MssqlVirtualMachineGroup#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#resource_group_name MssqlVirtualMachineGroup#resource_group_name}.

---

##### `sqlImageOffer`<sup>Required</sup> <a name="sqlImageOffer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.sqlImageOffer"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#sql_image_offer MssqlVirtualMachineGroup#sql_image_offer}.

---

##### `sqlImageSku`<sup>Required</sup> <a name="sqlImageSku" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.sqlImageSku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#sql_image_sku MssqlVirtualMachineGroup#sql_image_sku}.

---

##### `wsfcDomainProfile`<sup>Required</sup> <a name="wsfcDomainProfile" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.wsfcDomainProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a>

wsfc_domain_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#wsfc_domain_profile MssqlVirtualMachineGroup#wsfc_domain_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#id MssqlVirtualMachineGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#tags MssqlVirtualMachineGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#timeouts MssqlVirtualMachineGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putWsfcDomainProfile">putWsfcDomainProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putTimeouts"></a>

```java
public void putTimeouts(MssqlVirtualMachineGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a>

---

##### `putWsfcDomainProfile` <a name="putWsfcDomainProfile" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putWsfcDomainProfile"></a>

```java
public void putWsfcDomainProfile(MssqlVirtualMachineGroupWsfcDomainProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.putWsfcDomainProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlVirtualMachineGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_group.MssqlVirtualMachineGroup;

MssqlVirtualMachineGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_group.MssqlVirtualMachineGroup;

MssqlVirtualMachineGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_group.MssqlVirtualMachineGroup;

MssqlVirtualMachineGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_group.MssqlVirtualMachineGroup;

MssqlVirtualMachineGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MssqlVirtualMachineGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MssqlVirtualMachineGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MssqlVirtualMachineGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MssqlVirtualMachineGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MssqlVirtualMachineGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference">MssqlVirtualMachineGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.wsfcDomainProfile">wsfcDomainProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference">MssqlVirtualMachineGroupWsfcDomainProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageOfferInput">sqlImageOfferInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageSkuInput">sqlImageSkuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.wsfcDomainProfileInput">wsfcDomainProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageOffer">sqlImageOffer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageSku">sqlImageSku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.timeouts"></a>

```java
public MssqlVirtualMachineGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference">MssqlVirtualMachineGroupTimeoutsOutputReference</a>

---

##### `wsfcDomainProfile`<sup>Required</sup> <a name="wsfcDomainProfile" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.wsfcDomainProfile"></a>

```java
public MssqlVirtualMachineGroupWsfcDomainProfileOutputReference getWsfcDomainProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference">MssqlVirtualMachineGroupWsfcDomainProfileOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sqlImageOfferInput`<sup>Optional</sup> <a name="sqlImageOfferInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageOfferInput"></a>

```java
public java.lang.String getSqlImageOfferInput();
```

- *Type:* java.lang.String

---

##### `sqlImageSkuInput`<sup>Optional</sup> <a name="sqlImageSkuInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageSkuInput"></a>

```java
public java.lang.String getSqlImageSkuInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a>

---

##### `wsfcDomainProfileInput`<sup>Optional</sup> <a name="wsfcDomainProfileInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.wsfcDomainProfileInput"></a>

```java
public MssqlVirtualMachineGroupWsfcDomainProfile getWsfcDomainProfileInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sqlImageOffer`<sup>Required</sup> <a name="sqlImageOffer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageOffer"></a>

```java
public java.lang.String getSqlImageOffer();
```

- *Type:* java.lang.String

---

##### `sqlImageSku`<sup>Required</sup> <a name="sqlImageSku" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.sqlImageSku"></a>

```java
public java.lang.String getSqlImageSku();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlVirtualMachineGroupConfig <a name="MssqlVirtualMachineGroupConfig" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_group.MssqlVirtualMachineGroupConfig;

MssqlVirtualMachineGroupConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sqlImageOffer(java.lang.String)
    .sqlImageSku(java.lang.String)
    .wsfcDomainProfile(MssqlVirtualMachineGroupWsfcDomainProfile)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MssqlVirtualMachineGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#location MssqlVirtualMachineGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#name MssqlVirtualMachineGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#resource_group_name MssqlVirtualMachineGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.sqlImageOffer">sqlImageOffer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#sql_image_offer MssqlVirtualMachineGroup#sql_image_offer}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.sqlImageSku">sqlImageSku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#sql_image_sku MssqlVirtualMachineGroup#sql_image_sku}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.wsfcDomainProfile">wsfcDomainProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a></code> | wsfc_domain_profile block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#id MssqlVirtualMachineGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#tags MssqlVirtualMachineGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#location MssqlVirtualMachineGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#name MssqlVirtualMachineGroup#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#resource_group_name MssqlVirtualMachineGroup#resource_group_name}.

---

##### `sqlImageOffer`<sup>Required</sup> <a name="sqlImageOffer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.sqlImageOffer"></a>

```java
public java.lang.String getSqlImageOffer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#sql_image_offer MssqlVirtualMachineGroup#sql_image_offer}.

---

##### `sqlImageSku`<sup>Required</sup> <a name="sqlImageSku" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.sqlImageSku"></a>

```java
public java.lang.String getSqlImageSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#sql_image_sku MssqlVirtualMachineGroup#sql_image_sku}.

---

##### `wsfcDomainProfile`<sup>Required</sup> <a name="wsfcDomainProfile" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.wsfcDomainProfile"></a>

```java
public MssqlVirtualMachineGroupWsfcDomainProfile getWsfcDomainProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a>

wsfc_domain_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#wsfc_domain_profile MssqlVirtualMachineGroup#wsfc_domain_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#id MssqlVirtualMachineGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#tags MssqlVirtualMachineGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupConfig.property.timeouts"></a>

```java
public MssqlVirtualMachineGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#timeouts MssqlVirtualMachineGroup#timeouts}

---

### MssqlVirtualMachineGroupTimeouts <a name="MssqlVirtualMachineGroupTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_group.MssqlVirtualMachineGroupTimeouts;

MssqlVirtualMachineGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#create MssqlVirtualMachineGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#delete MssqlVirtualMachineGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#read MssqlVirtualMachineGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#update MssqlVirtualMachineGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#create MssqlVirtualMachineGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#delete MssqlVirtualMachineGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#read MssqlVirtualMachineGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#update MssqlVirtualMachineGroup#update}.

---

### MssqlVirtualMachineGroupWsfcDomainProfile <a name="MssqlVirtualMachineGroupWsfcDomainProfile" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_group.MssqlVirtualMachineGroupWsfcDomainProfile;

MssqlVirtualMachineGroupWsfcDomainProfile.builder()
    .clusterSubnetType(java.lang.String)
    .fqdn(java.lang.String)
//  .clusterBootstrapAccountName(java.lang.String)
//  .clusterOperatorAccountName(java.lang.String)
//  .organizationalUnitPath(java.lang.String)
//  .sqlServiceAccountName(java.lang.String)
//  .storageAccountPrimaryKey(java.lang.String)
//  .storageAccountUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterSubnetType">clusterSubnetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#cluster_subnet_type MssqlVirtualMachineGroup#cluster_subnet_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#fqdn MssqlVirtualMachineGroup#fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterBootstrapAccountName">clusterBootstrapAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#cluster_bootstrap_account_name MssqlVirtualMachineGroup#cluster_bootstrap_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterOperatorAccountName">clusterOperatorAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#cluster_operator_account_name MssqlVirtualMachineGroup#cluster_operator_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.organizationalUnitPath">organizationalUnitPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#organizational_unit_path MssqlVirtualMachineGroup#organizational_unit_path}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.sqlServiceAccountName">sqlServiceAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#sql_service_account_name MssqlVirtualMachineGroup#sql_service_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.storageAccountPrimaryKey">storageAccountPrimaryKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#storage_account_primary_key MssqlVirtualMachineGroup#storage_account_primary_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.storageAccountUrl">storageAccountUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#storage_account_url MssqlVirtualMachineGroup#storage_account_url}. |

---

##### `clusterSubnetType`<sup>Required</sup> <a name="clusterSubnetType" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterSubnetType"></a>

```java
public java.lang.String getClusterSubnetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#cluster_subnet_type MssqlVirtualMachineGroup#cluster_subnet_type}.

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#fqdn MssqlVirtualMachineGroup#fqdn}.

---

##### `clusterBootstrapAccountName`<sup>Optional</sup> <a name="clusterBootstrapAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterBootstrapAccountName"></a>

```java
public java.lang.String getClusterBootstrapAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#cluster_bootstrap_account_name MssqlVirtualMachineGroup#cluster_bootstrap_account_name}.

---

##### `clusterOperatorAccountName`<sup>Optional</sup> <a name="clusterOperatorAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.clusterOperatorAccountName"></a>

```java
public java.lang.String getClusterOperatorAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#cluster_operator_account_name MssqlVirtualMachineGroup#cluster_operator_account_name}.

---

##### `organizationalUnitPath`<sup>Optional</sup> <a name="organizationalUnitPath" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.organizationalUnitPath"></a>

```java
public java.lang.String getOrganizationalUnitPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#organizational_unit_path MssqlVirtualMachineGroup#organizational_unit_path}.

---

##### `sqlServiceAccountName`<sup>Optional</sup> <a name="sqlServiceAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.sqlServiceAccountName"></a>

```java
public java.lang.String getSqlServiceAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#sql_service_account_name MssqlVirtualMachineGroup#sql_service_account_name}.

---

##### `storageAccountPrimaryKey`<sup>Optional</sup> <a name="storageAccountPrimaryKey" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.storageAccountPrimaryKey"></a>

```java
public java.lang.String getStorageAccountPrimaryKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#storage_account_primary_key MssqlVirtualMachineGroup#storage_account_primary_key}.

---

##### `storageAccountUrl`<sup>Optional</sup> <a name="storageAccountUrl" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile.property.storageAccountUrl"></a>

```java
public java.lang.String getStorageAccountUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/mssql_virtual_machine_group#storage_account_url MssqlVirtualMachineGroup#storage_account_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlVirtualMachineGroupTimeoutsOutputReference <a name="MssqlVirtualMachineGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_group.MssqlVirtualMachineGroupTimeoutsOutputReference;

new MssqlVirtualMachineGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupTimeouts">MssqlVirtualMachineGroupTimeouts</a>

---


### MssqlVirtualMachineGroupWsfcDomainProfileOutputReference <a name="MssqlVirtualMachineGroupWsfcDomainProfileOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_group.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference;

new MssqlVirtualMachineGroupWsfcDomainProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetClusterBootstrapAccountName">resetClusterBootstrapAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetClusterOperatorAccountName">resetClusterOperatorAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetOrganizationalUnitPath">resetOrganizationalUnitPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetSqlServiceAccountName">resetSqlServiceAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetStorageAccountPrimaryKey">resetStorageAccountPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetStorageAccountUrl">resetStorageAccountUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterBootstrapAccountName` <a name="resetClusterBootstrapAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetClusterBootstrapAccountName"></a>

```java
public void resetClusterBootstrapAccountName()
```

##### `resetClusterOperatorAccountName` <a name="resetClusterOperatorAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetClusterOperatorAccountName"></a>

```java
public void resetClusterOperatorAccountName()
```

##### `resetOrganizationalUnitPath` <a name="resetOrganizationalUnitPath" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetOrganizationalUnitPath"></a>

```java
public void resetOrganizationalUnitPath()
```

##### `resetSqlServiceAccountName` <a name="resetSqlServiceAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetSqlServiceAccountName"></a>

```java
public void resetSqlServiceAccountName()
```

##### `resetStorageAccountPrimaryKey` <a name="resetStorageAccountPrimaryKey" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetStorageAccountPrimaryKey"></a>

```java
public void resetStorageAccountPrimaryKey()
```

##### `resetStorageAccountUrl` <a name="resetStorageAccountUrl" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.resetStorageAccountUrl"></a>

```java
public void resetStorageAccountUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterBootstrapAccountNameInput">clusterBootstrapAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterOperatorAccountNameInput">clusterOperatorAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterSubnetTypeInput">clusterSubnetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqdnInput">fqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.organizationalUnitPathInput">organizationalUnitPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.sqlServiceAccountNameInput">sqlServiceAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountPrimaryKeyInput">storageAccountPrimaryKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountUrlInput">storageAccountUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterBootstrapAccountName">clusterBootstrapAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterOperatorAccountName">clusterOperatorAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterSubnetType">clusterSubnetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.organizationalUnitPath">organizationalUnitPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.sqlServiceAccountName">sqlServiceAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountPrimaryKey">storageAccountPrimaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountUrl">storageAccountUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterBootstrapAccountNameInput`<sup>Optional</sup> <a name="clusterBootstrapAccountNameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterBootstrapAccountNameInput"></a>

```java
public java.lang.String getClusterBootstrapAccountNameInput();
```

- *Type:* java.lang.String

---

##### `clusterOperatorAccountNameInput`<sup>Optional</sup> <a name="clusterOperatorAccountNameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterOperatorAccountNameInput"></a>

```java
public java.lang.String getClusterOperatorAccountNameInput();
```

- *Type:* java.lang.String

---

##### `clusterSubnetTypeInput`<sup>Optional</sup> <a name="clusterSubnetTypeInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterSubnetTypeInput"></a>

```java
public java.lang.String getClusterSubnetTypeInput();
```

- *Type:* java.lang.String

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqdnInput"></a>

```java
public java.lang.String getFqdnInput();
```

- *Type:* java.lang.String

---

##### `organizationalUnitPathInput`<sup>Optional</sup> <a name="organizationalUnitPathInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.organizationalUnitPathInput"></a>

```java
public java.lang.String getOrganizationalUnitPathInput();
```

- *Type:* java.lang.String

---

##### `sqlServiceAccountNameInput`<sup>Optional</sup> <a name="sqlServiceAccountNameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.sqlServiceAccountNameInput"></a>

```java
public java.lang.String getSqlServiceAccountNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountPrimaryKeyInput`<sup>Optional</sup> <a name="storageAccountPrimaryKeyInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountPrimaryKeyInput"></a>

```java
public java.lang.String getStorageAccountPrimaryKeyInput();
```

- *Type:* java.lang.String

---

##### `storageAccountUrlInput`<sup>Optional</sup> <a name="storageAccountUrlInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountUrlInput"></a>

```java
public java.lang.String getStorageAccountUrlInput();
```

- *Type:* java.lang.String

---

##### `clusterBootstrapAccountName`<sup>Required</sup> <a name="clusterBootstrapAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterBootstrapAccountName"></a>

```java
public java.lang.String getClusterBootstrapAccountName();
```

- *Type:* java.lang.String

---

##### `clusterOperatorAccountName`<sup>Required</sup> <a name="clusterOperatorAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterOperatorAccountName"></a>

```java
public java.lang.String getClusterOperatorAccountName();
```

- *Type:* java.lang.String

---

##### `clusterSubnetType`<sup>Required</sup> <a name="clusterSubnetType" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.clusterSubnetType"></a>

```java
public java.lang.String getClusterSubnetType();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `organizationalUnitPath`<sup>Required</sup> <a name="organizationalUnitPath" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.organizationalUnitPath"></a>

```java
public java.lang.String getOrganizationalUnitPath();
```

- *Type:* java.lang.String

---

##### `sqlServiceAccountName`<sup>Required</sup> <a name="sqlServiceAccountName" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.sqlServiceAccountName"></a>

```java
public java.lang.String getSqlServiceAccountName();
```

- *Type:* java.lang.String

---

##### `storageAccountPrimaryKey`<sup>Required</sup> <a name="storageAccountPrimaryKey" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountPrimaryKey"></a>

```java
public java.lang.String getStorageAccountPrimaryKey();
```

- *Type:* java.lang.String

---

##### `storageAccountUrl`<sup>Required</sup> <a name="storageAccountUrl" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.storageAccountUrl"></a>

```java
public java.lang.String getStorageAccountUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfileOutputReference.property.internalValue"></a>

```java
public MssqlVirtualMachineGroupWsfcDomainProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineGroup.MssqlVirtualMachineGroupWsfcDomainProfile">MssqlVirtualMachineGroupWsfcDomainProfile</a>

---



