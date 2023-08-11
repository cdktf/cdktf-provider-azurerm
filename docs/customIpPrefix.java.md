# `azurerm_custom_ip_prefix`

Refer to the Terraform Registory for docs: [`azurerm_custom_ip_prefix`](https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix).

# `customIpPrefix` Submodule <a name="`customIpPrefix` Submodule" id="@cdktf/provider-azurerm.customIpPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomIpPrefix <a name="CustomIpPrefix" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix azurerm_custom_ip_prefix}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.custom_ip_prefix.CustomIpPrefix;

CustomIpPrefix.Builder.create(Construct scope, java.lang.String id)
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
    .cidr(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .commissioningEnabled(java.lang.Boolean)
//  .commissioningEnabled(IResolvable)
//  .id(java.lang.String)
//  .internetAdvertisingDisabled(java.lang.Boolean)
//  .internetAdvertisingDisabled(IResolvable)
//  .parentCustomIpPrefixId(java.lang.String)
//  .roaValidityEndDate(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CustomIpPrefixTimeouts)
//  .wanValidationSignedMessage(java.lang.String)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#cidr CustomIpPrefix#cidr}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#location CustomIpPrefix#location}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#name CustomIpPrefix#name}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#resource_group_name CustomIpPrefix#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.commissioningEnabled">commissioningEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#commissioning_enabled CustomIpPrefix#commissioning_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#id CustomIpPrefix#id}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.internetAdvertisingDisabled">internetAdvertisingDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#internet_advertising_disabled CustomIpPrefix#internet_advertising_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.parentCustomIpPrefixId">parentCustomIpPrefixId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#parent_custom_ip_prefix_id CustomIpPrefix#parent_custom_ip_prefix_id}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.roaValidityEndDate">roaValidityEndDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#roa_validity_end_date CustomIpPrefix#roa_validity_end_date}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#tags CustomIpPrefix#tags}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeouts">CustomIpPrefixTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.wanValidationSignedMessage">wanValidationSignedMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#wan_validation_signed_message CustomIpPrefix#wan_validation_signed_message}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#zones CustomIpPrefix#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.cidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#cidr CustomIpPrefix#cidr}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#location CustomIpPrefix#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#name CustomIpPrefix#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#resource_group_name CustomIpPrefix#resource_group_name}.

---

##### `commissioningEnabled`<sup>Optional</sup> <a name="commissioningEnabled" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.commissioningEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#commissioning_enabled CustomIpPrefix#commissioning_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#id CustomIpPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internetAdvertisingDisabled`<sup>Optional</sup> <a name="internetAdvertisingDisabled" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.internetAdvertisingDisabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#internet_advertising_disabled CustomIpPrefix#internet_advertising_disabled}.

---

##### `parentCustomIpPrefixId`<sup>Optional</sup> <a name="parentCustomIpPrefixId" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.parentCustomIpPrefixId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#parent_custom_ip_prefix_id CustomIpPrefix#parent_custom_ip_prefix_id}.

---

##### `roaValidityEndDate`<sup>Optional</sup> <a name="roaValidityEndDate" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.roaValidityEndDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#roa_validity_end_date CustomIpPrefix#roa_validity_end_date}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#tags CustomIpPrefix#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeouts">CustomIpPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#timeouts CustomIpPrefix#timeouts}

---

##### `wanValidationSignedMessage`<sup>Optional</sup> <a name="wanValidationSignedMessage" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.wanValidationSignedMessage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#wan_validation_signed_message CustomIpPrefix#wan_validation_signed_message}.

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.Initializer.parameter.zones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#zones CustomIpPrefix#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetCommissioningEnabled">resetCommissioningEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetInternetAdvertisingDisabled">resetInternetAdvertisingDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetParentCustomIpPrefixId">resetParentCustomIpPrefixId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetRoaValidityEndDate">resetRoaValidityEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetWanValidationSignedMessage">resetWanValidationSignedMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.putTimeouts"></a>

```java
public void putTimeouts(CustomIpPrefixTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeouts">CustomIpPrefixTimeouts</a>

---

##### `resetCommissioningEnabled` <a name="resetCommissioningEnabled" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetCommissioningEnabled"></a>

```java
public void resetCommissioningEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetId"></a>

```java
public void resetId()
```

##### `resetInternetAdvertisingDisabled` <a name="resetInternetAdvertisingDisabled" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetInternetAdvertisingDisabled"></a>

```java
public void resetInternetAdvertisingDisabled()
```

##### `resetParentCustomIpPrefixId` <a name="resetParentCustomIpPrefixId" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetParentCustomIpPrefixId"></a>

```java
public void resetParentCustomIpPrefixId()
```

##### `resetRoaValidityEndDate` <a name="resetRoaValidityEndDate" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetRoaValidityEndDate"></a>

```java
public void resetRoaValidityEndDate()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWanValidationSignedMessage` <a name="resetWanValidationSignedMessage" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetWanValidationSignedMessage"></a>

```java
public void resetWanValidationSignedMessage()
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.resetZones"></a>

```java
public void resetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.custom_ip_prefix.CustomIpPrefix;

CustomIpPrefix.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.custom_ip_prefix.CustomIpPrefix;

CustomIpPrefix.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.custom_ip_prefix.CustomIpPrefix;

CustomIpPrefix.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference">CustomIpPrefixTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.commissioningEnabledInput">commissioningEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.internetAdvertisingDisabledInput">internetAdvertisingDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.parentCustomIpPrefixIdInput">parentCustomIpPrefixIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.roaValidityEndDateInput">roaValidityEndDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeouts">CustomIpPrefixTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.wanValidationSignedMessageInput">wanValidationSignedMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.zonesInput">zonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.commissioningEnabled">commissioningEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.internetAdvertisingDisabled">internetAdvertisingDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.parentCustomIpPrefixId">parentCustomIpPrefixId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.roaValidityEndDate">roaValidityEndDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.wanValidationSignedMessage">wanValidationSignedMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.timeouts"></a>

```java
public CustomIpPrefixTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference">CustomIpPrefixTimeoutsOutputReference</a>

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `commissioningEnabledInput`<sup>Optional</sup> <a name="commissioningEnabledInput" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.commissioningEnabledInput"></a>

```java
public java.lang.Object getCommissioningEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `internetAdvertisingDisabledInput`<sup>Optional</sup> <a name="internetAdvertisingDisabledInput" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.internetAdvertisingDisabledInput"></a>

```java
public java.lang.Object getInternetAdvertisingDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentCustomIpPrefixIdInput`<sup>Optional</sup> <a name="parentCustomIpPrefixIdInput" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.parentCustomIpPrefixIdInput"></a>

```java
public java.lang.String getParentCustomIpPrefixIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `roaValidityEndDateInput`<sup>Optional</sup> <a name="roaValidityEndDateInput" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.roaValidityEndDateInput"></a>

```java
public java.lang.String getRoaValidityEndDateInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeouts">CustomIpPrefixTimeouts</a>

---

##### `wanValidationSignedMessageInput`<sup>Optional</sup> <a name="wanValidationSignedMessageInput" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.wanValidationSignedMessageInput"></a>

```java
public java.lang.String getWanValidationSignedMessageInput();
```

- *Type:* java.lang.String

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.zonesInput"></a>

```java
public java.util.List<java.lang.String> getZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `commissioningEnabled`<sup>Required</sup> <a name="commissioningEnabled" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.commissioningEnabled"></a>

```java
public java.lang.Object getCommissioningEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internetAdvertisingDisabled`<sup>Required</sup> <a name="internetAdvertisingDisabled" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.internetAdvertisingDisabled"></a>

```java
public java.lang.Object getInternetAdvertisingDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parentCustomIpPrefixId`<sup>Required</sup> <a name="parentCustomIpPrefixId" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.parentCustomIpPrefixId"></a>

```java
public java.lang.String getParentCustomIpPrefixId();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `roaValidityEndDate`<sup>Required</sup> <a name="roaValidityEndDate" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.roaValidityEndDate"></a>

```java
public java.lang.String getRoaValidityEndDate();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `wanValidationSignedMessage`<sup>Required</sup> <a name="wanValidationSignedMessage" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.wanValidationSignedMessage"></a>

```java
public java.lang.String getWanValidationSignedMessage();
```

- *Type:* java.lang.String

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefix.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CustomIpPrefixConfig <a name="CustomIpPrefixConfig" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.custom_ip_prefix.CustomIpPrefixConfig;

CustomIpPrefixConfig.builder()
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
    .cidr(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .commissioningEnabled(java.lang.Boolean)
//  .commissioningEnabled(IResolvable)
//  .id(java.lang.String)
//  .internetAdvertisingDisabled(java.lang.Boolean)
//  .internetAdvertisingDisabled(IResolvable)
//  .parentCustomIpPrefixId(java.lang.String)
//  .roaValidityEndDate(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CustomIpPrefixTimeouts)
//  .wanValidationSignedMessage(java.lang.String)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#cidr CustomIpPrefix#cidr}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#location CustomIpPrefix#location}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#name CustomIpPrefix#name}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#resource_group_name CustomIpPrefix#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.commissioningEnabled">commissioningEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#commissioning_enabled CustomIpPrefix#commissioning_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#id CustomIpPrefix#id}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.internetAdvertisingDisabled">internetAdvertisingDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#internet_advertising_disabled CustomIpPrefix#internet_advertising_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.parentCustomIpPrefixId">parentCustomIpPrefixId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#parent_custom_ip_prefix_id CustomIpPrefix#parent_custom_ip_prefix_id}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.roaValidityEndDate">roaValidityEndDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#roa_validity_end_date CustomIpPrefix#roa_validity_end_date}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#tags CustomIpPrefix#tags}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeouts">CustomIpPrefixTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.wanValidationSignedMessage">wanValidationSignedMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#wan_validation_signed_message CustomIpPrefix#wan_validation_signed_message}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#zones CustomIpPrefix#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#cidr CustomIpPrefix#cidr}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#location CustomIpPrefix#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#name CustomIpPrefix#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#resource_group_name CustomIpPrefix#resource_group_name}.

---

##### `commissioningEnabled`<sup>Optional</sup> <a name="commissioningEnabled" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.commissioningEnabled"></a>

```java
public java.lang.Object getCommissioningEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#commissioning_enabled CustomIpPrefix#commissioning_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#id CustomIpPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internetAdvertisingDisabled`<sup>Optional</sup> <a name="internetAdvertisingDisabled" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.internetAdvertisingDisabled"></a>

```java
public java.lang.Object getInternetAdvertisingDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#internet_advertising_disabled CustomIpPrefix#internet_advertising_disabled}.

---

##### `parentCustomIpPrefixId`<sup>Optional</sup> <a name="parentCustomIpPrefixId" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.parentCustomIpPrefixId"></a>

```java
public java.lang.String getParentCustomIpPrefixId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#parent_custom_ip_prefix_id CustomIpPrefix#parent_custom_ip_prefix_id}.

---

##### `roaValidityEndDate`<sup>Optional</sup> <a name="roaValidityEndDate" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.roaValidityEndDate"></a>

```java
public java.lang.String getRoaValidityEndDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#roa_validity_end_date CustomIpPrefix#roa_validity_end_date}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#tags CustomIpPrefix#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.timeouts"></a>

```java
public CustomIpPrefixTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeouts">CustomIpPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#timeouts CustomIpPrefix#timeouts}

---

##### `wanValidationSignedMessage`<sup>Optional</sup> <a name="wanValidationSignedMessage" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.wanValidationSignedMessage"></a>

```java
public java.lang.String getWanValidationSignedMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#wan_validation_signed_message CustomIpPrefix#wan_validation_signed_message}.

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixConfig.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#zones CustomIpPrefix#zones}.

---

### CustomIpPrefixTimeouts <a name="CustomIpPrefixTimeouts" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.custom_ip_prefix.CustomIpPrefixTimeouts;

CustomIpPrefixTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#create CustomIpPrefix#create}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#delete CustomIpPrefix#delete}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#read CustomIpPrefix#read}. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#update CustomIpPrefix#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#create CustomIpPrefix#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#delete CustomIpPrefix#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#read CustomIpPrefix#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/custom_ip_prefix#update CustomIpPrefix#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomIpPrefixTimeoutsOutputReference <a name="CustomIpPrefixTimeoutsOutputReference" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.custom_ip_prefix.CustomIpPrefixTimeoutsOutputReference;

new CustomIpPrefixTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeouts">CustomIpPrefixTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.customIpPrefix.CustomIpPrefixTimeouts">CustomIpPrefixTimeouts</a>

---



