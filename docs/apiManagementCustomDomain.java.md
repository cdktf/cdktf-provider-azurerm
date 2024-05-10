# `apiManagementCustomDomain` Submodule <a name="`apiManagementCustomDomain` Submodule" id="@cdktf/provider-azurerm.apiManagementCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementCustomDomain <a name="ApiManagementCustomDomain" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain azurerm_api_management_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomain;

ApiManagementCustomDomain.Builder.create(Construct scope, java.lang.String id)
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
    .apiManagementId(java.lang.String)
//  .developerPortal(IResolvable)
//  .developerPortal(java.util.List<ApiManagementCustomDomainDeveloperPortal>)
//  .gateway(IResolvable)
//  .gateway(java.util.List<ApiManagementCustomDomainGateway>)
//  .id(java.lang.String)
//  .management(IResolvable)
//  .management(java.util.List<ApiManagementCustomDomainManagement>)
//  .portal(IResolvable)
//  .portal(java.util.List<ApiManagementCustomDomainPortal>)
//  .scm(IResolvable)
//  .scm(java.util.List<ApiManagementCustomDomainScm>)
//  .timeouts(ApiManagementCustomDomainTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.apiManagementId">apiManagementId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#api_management_id ApiManagementCustomDomain#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.developerPortal">developerPortal</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a>></code> | developer_portal block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.gateway">gateway</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a>></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#id ApiManagementCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.management">management</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a>></code> | management block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.portal">portal</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a>></code> | portal block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.scm">scm</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a>></code> | scm block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts">ApiManagementCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiManagementId`<sup>Required</sup> <a name="apiManagementId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.apiManagementId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#api_management_id ApiManagementCustomDomain#api_management_id}.

---

##### `developerPortal`<sup>Optional</sup> <a name="developerPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.developerPortal"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a>>

developer_portal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#developer_portal ApiManagementCustomDomain#developer_portal}

---

##### `gateway`<sup>Optional</sup> <a name="gateway" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.gateway"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a>>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#gateway ApiManagementCustomDomain#gateway}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#id ApiManagementCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.management"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a>>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#management ApiManagementCustomDomain#management}

---

##### `portal`<sup>Optional</sup> <a name="portal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.portal"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a>>

portal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#portal ApiManagementCustomDomain#portal}

---

##### `scm`<sup>Optional</sup> <a name="scm" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.scm"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a>>

scm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#scm ApiManagementCustomDomain#scm}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts">ApiManagementCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#timeouts ApiManagementCustomDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putDeveloperPortal">putDeveloperPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putGateway">putGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putManagement">putManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putPortal">putPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putScm">putScm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetDeveloperPortal">resetDeveloperPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetGateway">resetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetManagement">resetManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetPortal">resetPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetScm">resetScm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeveloperPortal` <a name="putDeveloperPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putDeveloperPortal"></a>

```java
public void putDeveloperPortal(IResolvable OR java.util.List<ApiManagementCustomDomainDeveloperPortal> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putDeveloperPortal.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a>>

---

##### `putGateway` <a name="putGateway" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putGateway"></a>

```java
public void putGateway(IResolvable OR java.util.List<ApiManagementCustomDomainGateway> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putGateway.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a>>

---

##### `putManagement` <a name="putManagement" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putManagement"></a>

```java
public void putManagement(IResolvable OR java.util.List<ApiManagementCustomDomainManagement> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putManagement.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a>>

---

##### `putPortal` <a name="putPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putPortal"></a>

```java
public void putPortal(IResolvable OR java.util.List<ApiManagementCustomDomainPortal> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putPortal.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a>>

---

##### `putScm` <a name="putScm" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putScm"></a>

```java
public void putScm(IResolvable OR java.util.List<ApiManagementCustomDomainScm> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putScm.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putTimeouts"></a>

```java
public void putTimeouts(ApiManagementCustomDomainTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts">ApiManagementCustomDomainTimeouts</a>

---

##### `resetDeveloperPortal` <a name="resetDeveloperPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetDeveloperPortal"></a>

```java
public void resetDeveloperPortal()
```

##### `resetGateway` <a name="resetGateway" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetGateway"></a>

```java
public void resetGateway()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetId"></a>

```java
public void resetId()
```

##### `resetManagement` <a name="resetManagement" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetManagement"></a>

```java
public void resetManagement()
```

##### `resetPortal` <a name="resetPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetPortal"></a>

```java
public void resetPortal()
```

##### `resetScm` <a name="resetScm" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetScm"></a>

```java
public void resetScm()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementCustomDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomain;

ApiManagementCustomDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomain;

ApiManagementCustomDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomain;

ApiManagementCustomDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomain;

ApiManagementCustomDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiManagementCustomDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApiManagementCustomDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiManagementCustomDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiManagementCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.developerPortal">developerPortal</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList">ApiManagementCustomDomainDeveloperPortalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList">ApiManagementCustomDomainGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.management">management</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList">ApiManagementCustomDomainManagementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.portal">portal</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList">ApiManagementCustomDomainPortalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.scm">scm</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList">ApiManagementCustomDomainScmList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference">ApiManagementCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.apiManagementIdInput">apiManagementIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.developerPortalInput">developerPortalInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.gatewayInput">gatewayInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.managementInput">managementInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.portalInput">portalInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.scmInput">scmInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts">ApiManagementCustomDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.apiManagementId">apiManagementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `developerPortal`<sup>Required</sup> <a name="developerPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.developerPortal"></a>

```java
public ApiManagementCustomDomainDeveloperPortalList getDeveloperPortal();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList">ApiManagementCustomDomainDeveloperPortalList</a>

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.gateway"></a>

```java
public ApiManagementCustomDomainGatewayList getGateway();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList">ApiManagementCustomDomainGatewayList</a>

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.management"></a>

```java
public ApiManagementCustomDomainManagementList getManagement();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList">ApiManagementCustomDomainManagementList</a>

---

##### `portal`<sup>Required</sup> <a name="portal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.portal"></a>

```java
public ApiManagementCustomDomainPortalList getPortal();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList">ApiManagementCustomDomainPortalList</a>

---

##### `scm`<sup>Required</sup> <a name="scm" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.scm"></a>

```java
public ApiManagementCustomDomainScmList getScm();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList">ApiManagementCustomDomainScmList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.timeouts"></a>

```java
public ApiManagementCustomDomainTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference">ApiManagementCustomDomainTimeoutsOutputReference</a>

---

##### `apiManagementIdInput`<sup>Optional</sup> <a name="apiManagementIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.apiManagementIdInput"></a>

```java
public java.lang.String getApiManagementIdInput();
```

- *Type:* java.lang.String

---

##### `developerPortalInput`<sup>Optional</sup> <a name="developerPortalInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.developerPortalInput"></a>

```java
public java.lang.Object getDeveloperPortalInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a>>

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.gatewayInput"></a>

```java
public java.lang.Object getGatewayInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managementInput`<sup>Optional</sup> <a name="managementInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.managementInput"></a>

```java
public java.lang.Object getManagementInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a>>

---

##### `portalInput`<sup>Optional</sup> <a name="portalInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.portalInput"></a>

```java
public java.lang.Object getPortalInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a>>

---

##### `scmInput`<sup>Optional</sup> <a name="scmInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.scmInput"></a>

```java
public java.lang.Object getScmInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts">ApiManagementCustomDomainTimeouts</a>

---

##### `apiManagementId`<sup>Required</sup> <a name="apiManagementId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.apiManagementId"></a>

```java
public java.lang.String getApiManagementId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementCustomDomainConfig <a name="ApiManagementCustomDomainConfig" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomainConfig;

ApiManagementCustomDomainConfig.builder()
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
    .apiManagementId(java.lang.String)
//  .developerPortal(IResolvable)
//  .developerPortal(java.util.List<ApiManagementCustomDomainDeveloperPortal>)
//  .gateway(IResolvable)
//  .gateway(java.util.List<ApiManagementCustomDomainGateway>)
//  .id(java.lang.String)
//  .management(IResolvable)
//  .management(java.util.List<ApiManagementCustomDomainManagement>)
//  .portal(IResolvable)
//  .portal(java.util.List<ApiManagementCustomDomainPortal>)
//  .scm(IResolvable)
//  .scm(java.util.List<ApiManagementCustomDomainScm>)
//  .timeouts(ApiManagementCustomDomainTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.apiManagementId">apiManagementId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#api_management_id ApiManagementCustomDomain#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.developerPortal">developerPortal</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a>></code> | developer_portal block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.gateway">gateway</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a>></code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#id ApiManagementCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.management">management</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a>></code> | management block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.portal">portal</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a>></code> | portal block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.scm">scm</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a>></code> | scm block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts">ApiManagementCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiManagementId`<sup>Required</sup> <a name="apiManagementId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.apiManagementId"></a>

```java
public java.lang.String getApiManagementId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#api_management_id ApiManagementCustomDomain#api_management_id}.

---

##### `developerPortal`<sup>Optional</sup> <a name="developerPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.developerPortal"></a>

```java
public java.lang.Object getDeveloperPortal();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a>>

developer_portal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#developer_portal ApiManagementCustomDomain#developer_portal}

---

##### `gateway`<sup>Optional</sup> <a name="gateway" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.gateway"></a>

```java
public java.lang.Object getGateway();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a>>

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#gateway ApiManagementCustomDomain#gateway}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#id ApiManagementCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.management"></a>

```java
public java.lang.Object getManagement();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a>>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#management ApiManagementCustomDomain#management}

---

##### `portal`<sup>Optional</sup> <a name="portal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.portal"></a>

```java
public java.lang.Object getPortal();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a>>

portal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#portal ApiManagementCustomDomain#portal}

---

##### `scm`<sup>Optional</sup> <a name="scm" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.scm"></a>

```java
public java.lang.Object getScm();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a>>

scm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#scm ApiManagementCustomDomain#scm}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.timeouts"></a>

```java
public ApiManagementCustomDomainTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts">ApiManagementCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#timeouts ApiManagementCustomDomain#timeouts}

---

### ApiManagementCustomDomainDeveloperPortal <a name="ApiManagementCustomDomainDeveloperPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomainDeveloperPortal;

ApiManagementCustomDomainDeveloperPortal.builder()
    .hostName(java.lang.String)
//  .certificate(java.lang.String)
//  .certificatePassword(java.lang.String)
//  .keyVaultId(java.lang.String)
//  .negotiateClientCertificate(java.lang.Boolean)
//  .negotiateClientCertificate(IResolvable)
//  .sslKeyvaultIdentityClientId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}.

---

### ApiManagementCustomDomainGateway <a name="ApiManagementCustomDomainGateway" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomainGateway;

ApiManagementCustomDomainGateway.builder()
    .hostName(java.lang.String)
//  .certificate(java.lang.String)
//  .certificatePassword(java.lang.String)
//  .defaultSslBinding(java.lang.Boolean)
//  .defaultSslBinding(IResolvable)
//  .keyVaultId(java.lang.String)
//  .negotiateClientCertificate(java.lang.Boolean)
//  .negotiateClientCertificate(IResolvable)
//  .sslKeyvaultIdentityClientId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.defaultSslBinding">defaultSslBinding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#default_ssl_binding ApiManagementCustomDomain#default_ssl_binding}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}.

---

##### `defaultSslBinding`<sup>Optional</sup> <a name="defaultSslBinding" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.defaultSslBinding"></a>

```java
public java.lang.Object getDefaultSslBinding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#default_ssl_binding ApiManagementCustomDomain#default_ssl_binding}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}.

---

### ApiManagementCustomDomainManagement <a name="ApiManagementCustomDomainManagement" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomainManagement;

ApiManagementCustomDomainManagement.builder()
    .hostName(java.lang.String)
//  .certificate(java.lang.String)
//  .certificatePassword(java.lang.String)
//  .keyVaultId(java.lang.String)
//  .negotiateClientCertificate(java.lang.Boolean)
//  .negotiateClientCertificate(IResolvable)
//  .sslKeyvaultIdentityClientId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}.

---

### ApiManagementCustomDomainPortal <a name="ApiManagementCustomDomainPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomainPortal;

ApiManagementCustomDomainPortal.builder()
    .hostName(java.lang.String)
//  .certificate(java.lang.String)
//  .certificatePassword(java.lang.String)
//  .keyVaultId(java.lang.String)
//  .negotiateClientCertificate(java.lang.Boolean)
//  .negotiateClientCertificate(IResolvable)
//  .sslKeyvaultIdentityClientId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}.

---

### ApiManagementCustomDomainScm <a name="ApiManagementCustomDomainScm" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomainScm;

ApiManagementCustomDomainScm.builder()
    .hostName(java.lang.String)
//  .certificate(java.lang.String)
//  .certificatePassword(java.lang.String)
//  .keyVaultId(java.lang.String)
//  .negotiateClientCertificate(java.lang.Boolean)
//  .negotiateClientCertificate(IResolvable)
//  .sslKeyvaultIdentityClientId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}.

---

### ApiManagementCustomDomainTimeouts <a name="ApiManagementCustomDomainTimeouts" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomainTimeouts;

ApiManagementCustomDomainTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#create ApiManagementCustomDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#delete ApiManagementCustomDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#read ApiManagementCustomDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#update ApiManagementCustomDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#create ApiManagementCustomDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#delete ApiManagementCustomDomain#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#read ApiManagementCustomDomain#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.0/docs/resources/api_management_custom_domain#update ApiManagementCustomDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementCustomDomainDeveloperPortalList <a name="ApiManagementCustomDomainDeveloperPortalList" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomainDeveloperPortalList;

new ApiManagementCustomDomainDeveloperPortalList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.get"></a>

```java
public ApiManagementCustomDomainDeveloperPortalOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a>>

---


### ApiManagementCustomDomainDeveloperPortalOutputReference <a name="ApiManagementCustomDomainDeveloperPortalOutputReference" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomainDeveloperPortalOutputReference;

new ApiManagementCustomDomainDeveloperPortalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetCertificatePassword"></a>

```java
public void resetCertificatePassword()
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetKeyVaultId"></a>

```java
public void resetKeyVaultId()
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetNegotiateClientCertificate"></a>

```java
public void resetNegotiateClientCertificate()
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetSslKeyvaultIdentityClientId"></a>

```java
public void resetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificateSource">certificateSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.expiry">expiry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificateSource"></a>

```java
public java.lang.String getCertificateSource();
```

- *Type:* java.lang.String

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificateStatus"></a>

```java
public java.lang.String getCertificateStatus();
```

- *Type:* java.lang.String

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.expiry"></a>

```java
public java.lang.String getExpiry();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificatePasswordInput"></a>

```java
public java.lang.String getCertificatePasswordInput();
```

- *Type:* java.lang.String

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.negotiateClientCertificateInput"></a>

```java
public java.lang.Object getNegotiateClientCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientIdInput();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a>

---


### ApiManagementCustomDomainGatewayList <a name="ApiManagementCustomDomainGatewayList" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomainGatewayList;

new ApiManagementCustomDomainGatewayList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.get"></a>

```java
public ApiManagementCustomDomainGatewayOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a>>

---


### ApiManagementCustomDomainGatewayOutputReference <a name="ApiManagementCustomDomainGatewayOutputReference" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomainGatewayOutputReference;

new ApiManagementCustomDomainGatewayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetDefaultSslBinding">resetDefaultSslBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetCertificatePassword"></a>

```java
public void resetCertificatePassword()
```

##### `resetDefaultSslBinding` <a name="resetDefaultSslBinding" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetDefaultSslBinding"></a>

```java
public void resetDefaultSslBinding()
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetKeyVaultId"></a>

```java
public void resetKeyVaultId()
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetNegotiateClientCertificate"></a>

```java
public void resetNegotiateClientCertificate()
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetSslKeyvaultIdentityClientId"></a>

```java
public void resetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificateSource">certificateSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.expiry">expiry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.defaultSslBindingInput">defaultSslBindingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.defaultSslBinding">defaultSslBinding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificateSource"></a>

```java
public java.lang.String getCertificateSource();
```

- *Type:* java.lang.String

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificateStatus"></a>

```java
public java.lang.String getCertificateStatus();
```

- *Type:* java.lang.String

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.expiry"></a>

```java
public java.lang.String getExpiry();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificatePasswordInput"></a>

```java
public java.lang.String getCertificatePasswordInput();
```

- *Type:* java.lang.String

---

##### `defaultSslBindingInput`<sup>Optional</sup> <a name="defaultSslBindingInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.defaultSslBindingInput"></a>

```java
public java.lang.Object getDefaultSslBindingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.negotiateClientCertificateInput"></a>

```java
public java.lang.Object getNegotiateClientCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientIdInput();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

---

##### `defaultSslBinding`<sup>Required</sup> <a name="defaultSslBinding" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.defaultSslBinding"></a>

```java
public java.lang.Object getDefaultSslBinding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a>

---


### ApiManagementCustomDomainManagementList <a name="ApiManagementCustomDomainManagementList" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomainManagementList;

new ApiManagementCustomDomainManagementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.get"></a>

```java
public ApiManagementCustomDomainManagementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a>>

---


### ApiManagementCustomDomainManagementOutputReference <a name="ApiManagementCustomDomainManagementOutputReference" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomainManagementOutputReference;

new ApiManagementCustomDomainManagementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetCertificatePassword"></a>

```java
public void resetCertificatePassword()
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetKeyVaultId"></a>

```java
public void resetKeyVaultId()
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetNegotiateClientCertificate"></a>

```java
public void resetNegotiateClientCertificate()
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetSslKeyvaultIdentityClientId"></a>

```java
public void resetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificateSource">certificateSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.expiry">expiry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificateSource"></a>

```java
public java.lang.String getCertificateSource();
```

- *Type:* java.lang.String

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificateStatus"></a>

```java
public java.lang.String getCertificateStatus();
```

- *Type:* java.lang.String

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.expiry"></a>

```java
public java.lang.String getExpiry();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificatePasswordInput"></a>

```java
public java.lang.String getCertificatePasswordInput();
```

- *Type:* java.lang.String

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.negotiateClientCertificateInput"></a>

```java
public java.lang.Object getNegotiateClientCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientIdInput();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a>

---


### ApiManagementCustomDomainPortalList <a name="ApiManagementCustomDomainPortalList" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomainPortalList;

new ApiManagementCustomDomainPortalList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.get"></a>

```java
public ApiManagementCustomDomainPortalOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a>>

---


### ApiManagementCustomDomainPortalOutputReference <a name="ApiManagementCustomDomainPortalOutputReference" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomainPortalOutputReference;

new ApiManagementCustomDomainPortalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetCertificatePassword"></a>

```java
public void resetCertificatePassword()
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetKeyVaultId"></a>

```java
public void resetKeyVaultId()
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetNegotiateClientCertificate"></a>

```java
public void resetNegotiateClientCertificate()
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetSslKeyvaultIdentityClientId"></a>

```java
public void resetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificateSource">certificateSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.expiry">expiry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificateSource"></a>

```java
public java.lang.String getCertificateSource();
```

- *Type:* java.lang.String

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificateStatus"></a>

```java
public java.lang.String getCertificateStatus();
```

- *Type:* java.lang.String

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.expiry"></a>

```java
public java.lang.String getExpiry();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificatePasswordInput"></a>

```java
public java.lang.String getCertificatePasswordInput();
```

- *Type:* java.lang.String

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.negotiateClientCertificateInput"></a>

```java
public java.lang.Object getNegotiateClientCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientIdInput();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a>

---


### ApiManagementCustomDomainScmList <a name="ApiManagementCustomDomainScmList" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomainScmList;

new ApiManagementCustomDomainScmList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.get"></a>

```java
public ApiManagementCustomDomainScmOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a>>

---


### ApiManagementCustomDomainScmOutputReference <a name="ApiManagementCustomDomainScmOutputReference" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomainScmOutputReference;

new ApiManagementCustomDomainScmOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetCertificatePassword"></a>

```java
public void resetCertificatePassword()
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetKeyVaultId"></a>

```java
public void resetKeyVaultId()
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetNegotiateClientCertificate"></a>

```java
public void resetNegotiateClientCertificate()
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetSslKeyvaultIdentityClientId"></a>

```java
public void resetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificateSource">certificateSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.expiry">expiry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificateSource"></a>

```java
public java.lang.String getCertificateSource();
```

- *Type:* java.lang.String

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificateStatus"></a>

```java
public java.lang.String getCertificateStatus();
```

- *Type:* java.lang.String

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.expiry"></a>

```java
public java.lang.String getExpiry();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificatePasswordInput"></a>

```java
public java.lang.String getCertificatePasswordInput();
```

- *Type:* java.lang.String

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.negotiateClientCertificateInput"></a>

```java
public java.lang.Object getNegotiateClientCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientIdInput();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a>

---


### ApiManagementCustomDomainTimeoutsOutputReference <a name="ApiManagementCustomDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_custom_domain.ApiManagementCustomDomainTimeoutsOutputReference;

new ApiManagementCustomDomainTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts">ApiManagementCustomDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts">ApiManagementCustomDomainTimeouts</a>

---



