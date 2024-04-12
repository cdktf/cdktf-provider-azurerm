# `privateDnsTxtRecord` Submodule <a name="`privateDnsTxtRecord` Submodule" id="@cdktf/provider-azurerm.privateDnsTxtRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsTxtRecord <a name="PrivateDnsTxtRecord" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record azurerm_private_dns_txt_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_txt_record.PrivateDnsTxtRecord;

PrivateDnsTxtRecord.Builder.create(Construct scope, java.lang.String id)
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
    .record(IResolvable)
    .record(java.util.List<PrivateDnsTxtRecordRecord>)
    .resourceGroupName(java.lang.String)
    .ttl(java.lang.Number)
    .zoneName(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PrivateDnsTxtRecordTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#name PrivateDnsTxtRecord#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.record">record</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecord">PrivateDnsTxtRecordRecord</a>></code> | record block. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#resource_group_name PrivateDnsTxtRecord#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#ttl PrivateDnsTxtRecord#ttl}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.zoneName">zoneName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#zone_name PrivateDnsTxtRecord#zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#id PrivateDnsTxtRecord#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#tags PrivateDnsTxtRecord#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeouts">PrivateDnsTxtRecordTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#name PrivateDnsTxtRecord#name}.

---

##### `record`<sup>Required</sup> <a name="record" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.record"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecord">PrivateDnsTxtRecordRecord</a>>

record block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#record PrivateDnsTxtRecord#record}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#resource_group_name PrivateDnsTxtRecord#resource_group_name}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#ttl PrivateDnsTxtRecord#ttl}.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.zoneName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#zone_name PrivateDnsTxtRecord#zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#id PrivateDnsTxtRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#tags PrivateDnsTxtRecord#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeouts">PrivateDnsTxtRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#timeouts PrivateDnsTxtRecord#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.putRecord">putRecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRecord` <a name="putRecord" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.putRecord"></a>

```java
public void putRecord(IResolvable OR java.util.List<PrivateDnsTxtRecordRecord> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.putRecord.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecord">PrivateDnsTxtRecordRecord</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.putTimeouts"></a>

```java
public void putTimeouts(PrivateDnsTxtRecordTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeouts">PrivateDnsTxtRecordTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateDnsTxtRecord resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_txt_record.PrivateDnsTxtRecord;

PrivateDnsTxtRecord.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_txt_record.PrivateDnsTxtRecord;

PrivateDnsTxtRecord.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_txt_record.PrivateDnsTxtRecord;

PrivateDnsTxtRecord.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_txt_record.PrivateDnsTxtRecord;

PrivateDnsTxtRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PrivateDnsTxtRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PrivateDnsTxtRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PrivateDnsTxtRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PrivateDnsTxtRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PrivateDnsTxtRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.record">record</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList">PrivateDnsTxtRecordRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference">PrivateDnsTxtRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.recordInput">recordInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecord">PrivateDnsTxtRecordRecord</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeouts">PrivateDnsTxtRecordTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.zoneNameInput">zoneNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `record`<sup>Required</sup> <a name="record" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.record"></a>

```java
public PrivateDnsTxtRecordRecordList getRecord();
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList">PrivateDnsTxtRecordRecordList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.timeouts"></a>

```java
public PrivateDnsTxtRecordTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference">PrivateDnsTxtRecordTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recordInput`<sup>Optional</sup> <a name="recordInput" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.recordInput"></a>

```java
public java.lang.Object getRecordInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecord">PrivateDnsTxtRecordRecord</a>>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeouts">PrivateDnsTxtRecordTimeouts</a>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.zoneNameInput"></a>

```java
public java.lang.String getZoneNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecord.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsTxtRecordConfig <a name="PrivateDnsTxtRecordConfig" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_txt_record.PrivateDnsTxtRecordConfig;

PrivateDnsTxtRecordConfig.builder()
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
    .record(IResolvable)
    .record(java.util.List<PrivateDnsTxtRecordRecord>)
    .resourceGroupName(java.lang.String)
    .ttl(java.lang.Number)
    .zoneName(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PrivateDnsTxtRecordTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#name PrivateDnsTxtRecord#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.record">record</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecord">PrivateDnsTxtRecordRecord</a>></code> | record block. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#resource_group_name PrivateDnsTxtRecord#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#ttl PrivateDnsTxtRecord#ttl}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#zone_name PrivateDnsTxtRecord#zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#id PrivateDnsTxtRecord#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#tags PrivateDnsTxtRecord#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeouts">PrivateDnsTxtRecordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#name PrivateDnsTxtRecord#name}.

---

##### `record`<sup>Required</sup> <a name="record" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.record"></a>

```java
public java.lang.Object getRecord();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecord">PrivateDnsTxtRecordRecord</a>>

record block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#record PrivateDnsTxtRecord#record}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#resource_group_name PrivateDnsTxtRecord#resource_group_name}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#ttl PrivateDnsTxtRecord#ttl}.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#zone_name PrivateDnsTxtRecord#zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#id PrivateDnsTxtRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#tags PrivateDnsTxtRecord#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordConfig.property.timeouts"></a>

```java
public PrivateDnsTxtRecordTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeouts">PrivateDnsTxtRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#timeouts PrivateDnsTxtRecord#timeouts}

---

### PrivateDnsTxtRecordRecord <a name="PrivateDnsTxtRecordRecord" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecord.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_txt_record.PrivateDnsTxtRecordRecord;

PrivateDnsTxtRecordRecord.builder()
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecord.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#value PrivateDnsTxtRecord#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecord.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#value PrivateDnsTxtRecord#value}.

---

### PrivateDnsTxtRecordTimeouts <a name="PrivateDnsTxtRecordTimeouts" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_txt_record.PrivateDnsTxtRecordTimeouts;

PrivateDnsTxtRecordTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#create PrivateDnsTxtRecord#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#delete PrivateDnsTxtRecord#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#read PrivateDnsTxtRecord#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#update PrivateDnsTxtRecord#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#create PrivateDnsTxtRecord#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#delete PrivateDnsTxtRecord#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#read PrivateDnsTxtRecord#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/private_dns_txt_record#update PrivateDnsTxtRecord#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsTxtRecordRecordList <a name="PrivateDnsTxtRecordRecordList" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_txt_record.PrivateDnsTxtRecordRecordList;

new PrivateDnsTxtRecordRecordList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.get"></a>

```java
public PrivateDnsTxtRecordRecordOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecord">PrivateDnsTxtRecordRecord</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecord">PrivateDnsTxtRecordRecord</a>>

---


### PrivateDnsTxtRecordRecordOutputReference <a name="PrivateDnsTxtRecordRecordOutputReference" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_txt_record.PrivateDnsTxtRecordRecordOutputReference;

new PrivateDnsTxtRecordRecordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecord">PrivateDnsTxtRecordRecord</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecordOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordRecord">PrivateDnsTxtRecordRecord</a>

---


### PrivateDnsTxtRecordTimeoutsOutputReference <a name="PrivateDnsTxtRecordTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_txt_record.PrivateDnsTxtRecordTimeoutsOutputReference;

new PrivateDnsTxtRecordTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeouts">PrivateDnsTxtRecordTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.privateDnsTxtRecord.PrivateDnsTxtRecordTimeouts">PrivateDnsTxtRecordTimeouts</a>

---



