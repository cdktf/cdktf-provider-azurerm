# `privateDnsAaaaRecord` Submodule <a name="`privateDnsAaaaRecord` Submodule" id="@cdktf/provider-azurerm.privateDnsAaaaRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsAaaaRecord <a name="PrivateDnsAaaaRecord" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record azurerm_private_dns_aaaa_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_aaaa_record.PrivateDnsAaaaRecord;

PrivateDnsAaaaRecord.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .records(java.util.List<java.lang.String>)
    .resourceGroupName(java.lang.String)
    .ttl(java.lang.Number)
    .zoneName(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PrivateDnsAaaaRecordTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#name PrivateDnsAaaaRecord#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.records">records</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#records PrivateDnsAaaaRecord#records}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#resource_group_name PrivateDnsAaaaRecord#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#ttl PrivateDnsAaaaRecord#ttl}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.zoneName">zoneName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#zone_name PrivateDnsAaaaRecord#zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#id PrivateDnsAaaaRecord#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#tags PrivateDnsAaaaRecord#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeouts">PrivateDnsAaaaRecordTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#name PrivateDnsAaaaRecord#name}.

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.records"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#records PrivateDnsAaaaRecord#records}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#resource_group_name PrivateDnsAaaaRecord#resource_group_name}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#ttl PrivateDnsAaaaRecord#ttl}.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.zoneName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#zone_name PrivateDnsAaaaRecord#zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#id PrivateDnsAaaaRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#tags PrivateDnsAaaaRecord#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeouts">PrivateDnsAaaaRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#timeouts PrivateDnsAaaaRecord#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.putTimeouts"></a>

```java
public void putTimeouts(PrivateDnsAaaaRecordTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeouts">PrivateDnsAaaaRecordTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateDnsAaaaRecord resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_aaaa_record.PrivateDnsAaaaRecord;

PrivateDnsAaaaRecord.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_aaaa_record.PrivateDnsAaaaRecord;

PrivateDnsAaaaRecord.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_aaaa_record.PrivateDnsAaaaRecord;

PrivateDnsAaaaRecord.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_aaaa_record.PrivateDnsAaaaRecord;

PrivateDnsAaaaRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PrivateDnsAaaaRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PrivateDnsAaaaRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PrivateDnsAaaaRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PrivateDnsAaaaRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PrivateDnsAaaaRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference">PrivateDnsAaaaRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.recordsInput">recordsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeouts">PrivateDnsAaaaRecordTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.zoneNameInput">zoneNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.records">records</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.timeouts"></a>

```java
public PrivateDnsAaaaRecordTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference">PrivateDnsAaaaRecordTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recordsInput`<sup>Optional</sup> <a name="recordsInput" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.recordsInput"></a>

```java
public java.util.List<java.lang.String> getRecordsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeouts">PrivateDnsAaaaRecordTimeouts</a>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.zoneNameInput"></a>

```java
public java.lang.String getZoneNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.records"></a>

```java
public java.util.List<java.lang.String> getRecords();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecord.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsAaaaRecordConfig <a name="PrivateDnsAaaaRecordConfig" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_aaaa_record.PrivateDnsAaaaRecordConfig;

PrivateDnsAaaaRecordConfig.builder()
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
    .name(java.lang.String)
    .records(java.util.List<java.lang.String>)
    .resourceGroupName(java.lang.String)
    .ttl(java.lang.Number)
    .zoneName(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PrivateDnsAaaaRecordTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#name PrivateDnsAaaaRecord#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.records">records</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#records PrivateDnsAaaaRecord#records}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#resource_group_name PrivateDnsAaaaRecord#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#ttl PrivateDnsAaaaRecord#ttl}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#zone_name PrivateDnsAaaaRecord#zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#id PrivateDnsAaaaRecord#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#tags PrivateDnsAaaaRecord#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeouts">PrivateDnsAaaaRecordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#name PrivateDnsAaaaRecord#name}.

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.records"></a>

```java
public java.util.List<java.lang.String> getRecords();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#records PrivateDnsAaaaRecord#records}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#resource_group_name PrivateDnsAaaaRecord#resource_group_name}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#ttl PrivateDnsAaaaRecord#ttl}.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#zone_name PrivateDnsAaaaRecord#zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#id PrivateDnsAaaaRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#tags PrivateDnsAaaaRecord#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordConfig.property.timeouts"></a>

```java
public PrivateDnsAaaaRecordTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeouts">PrivateDnsAaaaRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#timeouts PrivateDnsAaaaRecord#timeouts}

---

### PrivateDnsAaaaRecordTimeouts <a name="PrivateDnsAaaaRecordTimeouts" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_aaaa_record.PrivateDnsAaaaRecordTimeouts;

PrivateDnsAaaaRecordTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#create PrivateDnsAaaaRecord#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#delete PrivateDnsAaaaRecord#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#read PrivateDnsAaaaRecord#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#update PrivateDnsAaaaRecord#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#create PrivateDnsAaaaRecord#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#delete PrivateDnsAaaaRecord#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#read PrivateDnsAaaaRecord#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/private_dns_aaaa_record#update PrivateDnsAaaaRecord#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsAaaaRecordTimeoutsOutputReference <a name="PrivateDnsAaaaRecordTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_aaaa_record.PrivateDnsAaaaRecordTimeoutsOutputReference;

new PrivateDnsAaaaRecordTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeouts">PrivateDnsAaaaRecordTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateDnsAaaaRecord.PrivateDnsAaaaRecordTimeouts">PrivateDnsAaaaRecordTimeouts</a>

---



