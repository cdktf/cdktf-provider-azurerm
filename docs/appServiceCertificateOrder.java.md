# `appServiceCertificateOrder` Submodule <a name="`appServiceCertificateOrder` Submodule" id="@cdktf/provider-azurerm.appServiceCertificateOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceCertificateOrder <a name="AppServiceCertificateOrder" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order azurerm_app_service_certificate_order}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_certificate_order.AppServiceCertificateOrder;

AppServiceCertificateOrder.Builder.create(Construct scope, java.lang.String id)
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
//  .autoRenew(java.lang.Boolean)
//  .autoRenew(IResolvable)
//  .csr(java.lang.String)
//  .distinguishedName(java.lang.String)
//  .id(java.lang.String)
//  .keySize(java.lang.Number)
//  .productType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AppServiceCertificateOrderTimeouts)
//  .validityInYears(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#location AppServiceCertificateOrder#location}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#name AppServiceCertificateOrder#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#resource_group_name AppServiceCertificateOrder#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#auto_renew AppServiceCertificateOrder#auto_renew}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.csr">csr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#csr AppServiceCertificateOrder#csr}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.distinguishedName">distinguishedName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#distinguished_name AppServiceCertificateOrder#distinguished_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#id AppServiceCertificateOrder#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.keySize">keySize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#key_size AppServiceCertificateOrder#key_size}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.productType">productType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#product_type AppServiceCertificateOrder#product_type}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#tags AppServiceCertificateOrder#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.validityInYears">validityInYears</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#validity_in_years AppServiceCertificateOrder#validity_in_years}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#location AppServiceCertificateOrder#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#name AppServiceCertificateOrder#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#resource_group_name AppServiceCertificateOrder#resource_group_name}.

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.autoRenew"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#auto_renew AppServiceCertificateOrder#auto_renew}.

---

##### `csr`<sup>Optional</sup> <a name="csr" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.csr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#csr AppServiceCertificateOrder#csr}.

---

##### `distinguishedName`<sup>Optional</sup> <a name="distinguishedName" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.distinguishedName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#distinguished_name AppServiceCertificateOrder#distinguished_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#id AppServiceCertificateOrder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.keySize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#key_size AppServiceCertificateOrder#key_size}.

---

##### `productType`<sup>Optional</sup> <a name="productType" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.productType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#product_type AppServiceCertificateOrder#product_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#tags AppServiceCertificateOrder#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#timeouts AppServiceCertificateOrder#timeouts}

---

##### `validityInYears`<sup>Optional</sup> <a name="validityInYears" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.validityInYears"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#validity_in_years AppServiceCertificateOrder#validity_in_years}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetAutoRenew">resetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetCsr">resetCsr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetDistinguishedName">resetDistinguishedName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetKeySize">resetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetProductType">resetProductType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetValidityInYears">resetValidityInYears</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.putTimeouts"></a>

```java
public void putTimeouts(AppServiceCertificateOrderTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a>

---

##### `resetAutoRenew` <a name="resetAutoRenew" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetAutoRenew"></a>

```java
public void resetAutoRenew()
```

##### `resetCsr` <a name="resetCsr" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetCsr"></a>

```java
public void resetCsr()
```

##### `resetDistinguishedName` <a name="resetDistinguishedName" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetDistinguishedName"></a>

```java
public void resetDistinguishedName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetId"></a>

```java
public void resetId()
```

##### `resetKeySize` <a name="resetKeySize" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetKeySize"></a>

```java
public void resetKeySize()
```

##### `resetProductType` <a name="resetProductType" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetProductType"></a>

```java
public void resetProductType()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetValidityInYears` <a name="resetValidityInYears" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetValidityInYears"></a>

```java
public void resetValidityInYears()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppServiceCertificateOrder resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_certificate_order.AppServiceCertificateOrder;

AppServiceCertificateOrder.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_certificate_order.AppServiceCertificateOrder;

AppServiceCertificateOrder.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_certificate_order.AppServiceCertificateOrder;

AppServiceCertificateOrder.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_certificate_order.AppServiceCertificateOrder;

AppServiceCertificateOrder.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppServiceCertificateOrder.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppServiceCertificateOrder resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppServiceCertificateOrder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppServiceCertificateOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppServiceCertificateOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.appServiceCertificateNotRenewableReasons">appServiceCertificateNotRenewableReasons</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.certificates">certificates</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList">AppServiceCertificateOrderCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.domainVerificationToken">domainVerificationToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.intermediateThumbprint">intermediateThumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.isPrivateKeyExternal">isPrivateKeyExternal</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.rootThumbprint">rootThumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.signedCertificateThumbprint">signedCertificateThumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference">AppServiceCertificateOrderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.autoRenewInput">autoRenewInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.csrInput">csrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.distinguishedNameInput">distinguishedNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.keySizeInput">keySizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.productTypeInput">productTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.validityInYearsInput">validityInYearsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.csr">csr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.distinguishedName">distinguishedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.keySize">keySize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.productType">productType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.validityInYears">validityInYears</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appServiceCertificateNotRenewableReasons`<sup>Required</sup> <a name="appServiceCertificateNotRenewableReasons" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.appServiceCertificateNotRenewableReasons"></a>

```java
public java.util.List<java.lang.String> getAppServiceCertificateNotRenewableReasons();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.certificates"></a>

```java
public AppServiceCertificateOrderCertificatesList getCertificates();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList">AppServiceCertificateOrderCertificatesList</a>

---

##### `domainVerificationToken`<sup>Required</sup> <a name="domainVerificationToken" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.domainVerificationToken"></a>

```java
public java.lang.String getDomainVerificationToken();
```

- *Type:* java.lang.String

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

---

##### `intermediateThumbprint`<sup>Required</sup> <a name="intermediateThumbprint" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.intermediateThumbprint"></a>

```java
public java.lang.String getIntermediateThumbprint();
```

- *Type:* java.lang.String

---

##### `isPrivateKeyExternal`<sup>Required</sup> <a name="isPrivateKeyExternal" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.isPrivateKeyExternal"></a>

```java
public IResolvable getIsPrivateKeyExternal();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `rootThumbprint`<sup>Required</sup> <a name="rootThumbprint" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.rootThumbprint"></a>

```java
public java.lang.String getRootThumbprint();
```

- *Type:* java.lang.String

---

##### `signedCertificateThumbprint`<sup>Required</sup> <a name="signedCertificateThumbprint" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.signedCertificateThumbprint"></a>

```java
public java.lang.String getSignedCertificateThumbprint();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.timeouts"></a>

```java
public AppServiceCertificateOrderTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference">AppServiceCertificateOrderTimeoutsOutputReference</a>

---

##### `autoRenewInput`<sup>Optional</sup> <a name="autoRenewInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.autoRenewInput"></a>

```java
public java.lang.Object getAutoRenewInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `csrInput`<sup>Optional</sup> <a name="csrInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.csrInput"></a>

```java
public java.lang.String getCsrInput();
```

- *Type:* java.lang.String

---

##### `distinguishedNameInput`<sup>Optional</sup> <a name="distinguishedNameInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.distinguishedNameInput"></a>

```java
public java.lang.String getDistinguishedNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keySizeInput`<sup>Optional</sup> <a name="keySizeInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.keySizeInput"></a>

```java
public java.lang.Number getKeySizeInput();
```

- *Type:* java.lang.Number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `productTypeInput`<sup>Optional</sup> <a name="productTypeInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.productTypeInput"></a>

```java
public java.lang.String getProductTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a>

---

##### `validityInYearsInput`<sup>Optional</sup> <a name="validityInYearsInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.validityInYearsInput"></a>

```java
public java.lang.Number getValidityInYearsInput();
```

- *Type:* java.lang.Number

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.autoRenew"></a>

```java
public java.lang.Object getAutoRenew();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.csr"></a>

```java
public java.lang.String getCsr();
```

- *Type:* java.lang.String

---

##### `distinguishedName`<sup>Required</sup> <a name="distinguishedName" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.distinguishedName"></a>

```java
public java.lang.String getDistinguishedName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keySize`<sup>Required</sup> <a name="keySize" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.keySize"></a>

```java
public java.lang.Number getKeySize();
```

- *Type:* java.lang.Number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `productType`<sup>Required</sup> <a name="productType" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.productType"></a>

```java
public java.lang.String getProductType();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `validityInYears`<sup>Required</sup> <a name="validityInYears" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.validityInYears"></a>

```java
public java.lang.Number getValidityInYears();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceCertificateOrderCertificates <a name="AppServiceCertificateOrderCertificates" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_certificate_order.AppServiceCertificateOrderCertificates;

AppServiceCertificateOrderCertificates.builder()
    .build();
```


### AppServiceCertificateOrderConfig <a name="AppServiceCertificateOrderConfig" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_certificate_order.AppServiceCertificateOrderConfig;

AppServiceCertificateOrderConfig.builder()
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
//  .autoRenew(java.lang.Boolean)
//  .autoRenew(IResolvable)
//  .csr(java.lang.String)
//  .distinguishedName(java.lang.String)
//  .id(java.lang.String)
//  .keySize(java.lang.Number)
//  .productType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AppServiceCertificateOrderTimeouts)
//  .validityInYears(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#location AppServiceCertificateOrder#location}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#name AppServiceCertificateOrder#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#resource_group_name AppServiceCertificateOrder#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#auto_renew AppServiceCertificateOrder#auto_renew}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.csr">csr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#csr AppServiceCertificateOrder#csr}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.distinguishedName">distinguishedName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#distinguished_name AppServiceCertificateOrder#distinguished_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#id AppServiceCertificateOrder#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.keySize">keySize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#key_size AppServiceCertificateOrder#key_size}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.productType">productType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#product_type AppServiceCertificateOrder#product_type}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#tags AppServiceCertificateOrder#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.validityInYears">validityInYears</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#validity_in_years AppServiceCertificateOrder#validity_in_years}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#location AppServiceCertificateOrder#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#name AppServiceCertificateOrder#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#resource_group_name AppServiceCertificateOrder#resource_group_name}.

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.autoRenew"></a>

```java
public java.lang.Object getAutoRenew();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#auto_renew AppServiceCertificateOrder#auto_renew}.

---

##### `csr`<sup>Optional</sup> <a name="csr" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.csr"></a>

```java
public java.lang.String getCsr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#csr AppServiceCertificateOrder#csr}.

---

##### `distinguishedName`<sup>Optional</sup> <a name="distinguishedName" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.distinguishedName"></a>

```java
public java.lang.String getDistinguishedName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#distinguished_name AppServiceCertificateOrder#distinguished_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#id AppServiceCertificateOrder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.keySize"></a>

```java
public java.lang.Number getKeySize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#key_size AppServiceCertificateOrder#key_size}.

---

##### `productType`<sup>Optional</sup> <a name="productType" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.productType"></a>

```java
public java.lang.String getProductType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#product_type AppServiceCertificateOrder#product_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#tags AppServiceCertificateOrder#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.timeouts"></a>

```java
public AppServiceCertificateOrderTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#timeouts AppServiceCertificateOrder#timeouts}

---

##### `validityInYears`<sup>Optional</sup> <a name="validityInYears" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.validityInYears"></a>

```java
public java.lang.Number getValidityInYears();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#validity_in_years AppServiceCertificateOrder#validity_in_years}.

---

### AppServiceCertificateOrderTimeouts <a name="AppServiceCertificateOrderTimeouts" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_certificate_order.AppServiceCertificateOrderTimeouts;

AppServiceCertificateOrderTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#create AppServiceCertificateOrder#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#delete AppServiceCertificateOrder#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#read AppServiceCertificateOrder#read}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#update AppServiceCertificateOrder#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#create AppServiceCertificateOrder#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#delete AppServiceCertificateOrder#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#read AppServiceCertificateOrder#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/app_service_certificate_order#update AppServiceCertificateOrder#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceCertificateOrderCertificatesList <a name="AppServiceCertificateOrderCertificatesList" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_certificate_order.AppServiceCertificateOrderCertificatesList;

new AppServiceCertificateOrderCertificatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.get"></a>

```java
public AppServiceCertificateOrderCertificatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AppServiceCertificateOrderCertificatesOutputReference <a name="AppServiceCertificateOrderCertificatesOutputReference" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_certificate_order.AppServiceCertificateOrderCertificatesOutputReference;

new AppServiceCertificateOrderCertificatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.keyVaultSecretName">keyVaultSecretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.provisioningState">provisioningState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificates">AppServiceCertificateOrderCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `keyVaultSecretName`<sup>Required</sup> <a name="keyVaultSecretName" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.keyVaultSecretName"></a>

```java
public java.lang.String getKeyVaultSecretName();
```

- *Type:* java.lang.String

---

##### `provisioningState`<sup>Required</sup> <a name="provisioningState" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.provisioningState"></a>

```java
public java.lang.String getProvisioningState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.internalValue"></a>

```java
public AppServiceCertificateOrderCertificates getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificates">AppServiceCertificateOrderCertificates</a>

---


### AppServiceCertificateOrderTimeoutsOutputReference <a name="AppServiceCertificateOrderTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_certificate_order.AppServiceCertificateOrderTimeoutsOutputReference;

new AppServiceCertificateOrderTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a>

---



