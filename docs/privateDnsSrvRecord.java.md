# `azurerm_private_dns_srv_record`

Refer to the Terraform Registory for docs: [`azurerm_private_dns_srv_record`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record).

# `privateDnsSrvRecord` Submodule <a name="`privateDnsSrvRecord` Submodule" id="@cdktf/provider-azurerm.privateDnsSrvRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsSrvRecord <a name="PrivateDnsSrvRecord" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record azurerm_private_dns_srv_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_srv_record.PrivateDnsSrvRecord;

PrivateDnsSrvRecord.Builder.create(Construct scope, java.lang.String id)
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
    .record(java.util.List<PrivateDnsSrvRecordRecord>)
    .resourceGroupName(java.lang.String)
    .ttl(java.lang.Number)
    .zoneName(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PrivateDnsSrvRecordTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#name PrivateDnsSrvRecord#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.record">record</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord">PrivateDnsSrvRecordRecord</a>></code> | record block. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#resource_group_name PrivateDnsSrvRecord#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#ttl PrivateDnsSrvRecord#ttl}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.zoneName">zoneName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#zone_name PrivateDnsSrvRecord#zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#id PrivateDnsSrvRecord#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#tags PrivateDnsSrvRecord#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeouts">PrivateDnsSrvRecordTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#name PrivateDnsSrvRecord#name}.

---

##### `record`<sup>Required</sup> <a name="record" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.record"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord">PrivateDnsSrvRecordRecord</a>>

record block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#record PrivateDnsSrvRecord#record}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#resource_group_name PrivateDnsSrvRecord#resource_group_name}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#ttl PrivateDnsSrvRecord#ttl}.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.zoneName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#zone_name PrivateDnsSrvRecord#zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#id PrivateDnsSrvRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#tags PrivateDnsSrvRecord#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeouts">PrivateDnsSrvRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#timeouts PrivateDnsSrvRecord#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.putRecord">putRecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRecord` <a name="putRecord" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.putRecord"></a>

```java
public void putRecord(IResolvable OR java.util.List<PrivateDnsSrvRecordRecord> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.putRecord.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord">PrivateDnsSrvRecordRecord</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.putTimeouts"></a>

```java
public void putTimeouts(PrivateDnsSrvRecordTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeouts">PrivateDnsSrvRecordTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_srv_record.PrivateDnsSrvRecord;

PrivateDnsSrvRecord.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_srv_record.PrivateDnsSrvRecord;

PrivateDnsSrvRecord.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_srv_record.PrivateDnsSrvRecord;

PrivateDnsSrvRecord.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.record">record</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList">PrivateDnsSrvRecordRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference">PrivateDnsSrvRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.recordInput">recordInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord">PrivateDnsSrvRecordRecord</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeouts">PrivateDnsSrvRecordTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.zoneNameInput">zoneNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `record`<sup>Required</sup> <a name="record" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.record"></a>

```java
public PrivateDnsSrvRecordRecordList getRecord();
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList">PrivateDnsSrvRecordRecordList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.timeouts"></a>

```java
public PrivateDnsSrvRecordTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference">PrivateDnsSrvRecordTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recordInput`<sup>Optional</sup> <a name="recordInput" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.recordInput"></a>

```java
public java.lang.Object getRecordInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord">PrivateDnsSrvRecordRecord</a>>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeouts">PrivateDnsSrvRecordTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.zoneNameInput"></a>

```java
public java.lang.String getZoneNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecord.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsSrvRecordConfig <a name="PrivateDnsSrvRecordConfig" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_srv_record.PrivateDnsSrvRecordConfig;

PrivateDnsSrvRecordConfig.builder()
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
    .record(java.util.List<PrivateDnsSrvRecordRecord>)
    .resourceGroupName(java.lang.String)
    .ttl(java.lang.Number)
    .zoneName(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PrivateDnsSrvRecordTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#name PrivateDnsSrvRecord#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.record">record</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord">PrivateDnsSrvRecordRecord</a>></code> | record block. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#resource_group_name PrivateDnsSrvRecord#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#ttl PrivateDnsSrvRecord#ttl}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#zone_name PrivateDnsSrvRecord#zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#id PrivateDnsSrvRecord#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#tags PrivateDnsSrvRecord#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeouts">PrivateDnsSrvRecordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#name PrivateDnsSrvRecord#name}.

---

##### `record`<sup>Required</sup> <a name="record" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.record"></a>

```java
public java.lang.Object getRecord();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord">PrivateDnsSrvRecordRecord</a>>

record block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#record PrivateDnsSrvRecord#record}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#resource_group_name PrivateDnsSrvRecord#resource_group_name}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#ttl PrivateDnsSrvRecord#ttl}.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#zone_name PrivateDnsSrvRecord#zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#id PrivateDnsSrvRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#tags PrivateDnsSrvRecord#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordConfig.property.timeouts"></a>

```java
public PrivateDnsSrvRecordTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeouts">PrivateDnsSrvRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#timeouts PrivateDnsSrvRecord#timeouts}

---

### PrivateDnsSrvRecordRecord <a name="PrivateDnsSrvRecordRecord" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_srv_record.PrivateDnsSrvRecordRecord;

PrivateDnsSrvRecordRecord.builder()
    .port(java.lang.Number)
    .priority(java.lang.Number)
    .target(java.lang.String)
    .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#port PrivateDnsSrvRecord#port}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#priority PrivateDnsSrvRecord#priority}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#target PrivateDnsSrvRecord#target}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#weight PrivateDnsSrvRecord#weight}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#port PrivateDnsSrvRecord#port}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#priority PrivateDnsSrvRecord#priority}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#target PrivateDnsSrvRecord#target}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#weight PrivateDnsSrvRecord#weight}.

---

### PrivateDnsSrvRecordTimeouts <a name="PrivateDnsSrvRecordTimeouts" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_srv_record.PrivateDnsSrvRecordTimeouts;

PrivateDnsSrvRecordTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#create PrivateDnsSrvRecord#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#delete PrivateDnsSrvRecord#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#read PrivateDnsSrvRecord#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#update PrivateDnsSrvRecord#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#create PrivateDnsSrvRecord#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#delete PrivateDnsSrvRecord#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#read PrivateDnsSrvRecord#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_srv_record#update PrivateDnsSrvRecord#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsSrvRecordRecordList <a name="PrivateDnsSrvRecordRecordList" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_srv_record.PrivateDnsSrvRecordRecordList;

new PrivateDnsSrvRecordRecordList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.get"></a>

```java
public PrivateDnsSrvRecordRecordOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord">PrivateDnsSrvRecordRecord</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord">PrivateDnsSrvRecordRecord</a>>

---


### PrivateDnsSrvRecordRecordOutputReference <a name="PrivateDnsSrvRecordRecordOutputReference" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_srv_record.PrivateDnsSrvRecordRecordOutputReference;

new PrivateDnsSrvRecordRecordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord">PrivateDnsSrvRecordRecord</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecordOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordRecord">PrivateDnsSrvRecordRecord</a> OR com.hashicorp.cdktf.IResolvable

---


### PrivateDnsSrvRecordTimeoutsOutputReference <a name="PrivateDnsSrvRecordTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.private_dns_srv_record.PrivateDnsSrvRecordTimeoutsOutputReference;

new PrivateDnsSrvRecordTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeouts">PrivateDnsSrvRecordTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsSrvRecord.PrivateDnsSrvRecordTimeouts">PrivateDnsSrvRecordTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



