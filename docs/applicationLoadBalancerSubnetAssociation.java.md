# `applicationLoadBalancerSubnetAssociation` Submodule <a name="`applicationLoadBalancerSubnetAssociation` Submodule" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationLoadBalancerSubnetAssociation <a name="ApplicationLoadBalancerSubnetAssociation" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association azurerm_application_load_balancer_subnet_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_load_balancer_subnet_association.ApplicationLoadBalancerSubnetAssociation;

ApplicationLoadBalancerSubnetAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .applicationLoadBalancerId(java.lang.String)
    .name(java.lang.String)
    .subnetId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ApplicationLoadBalancerSubnetAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.applicationLoadBalancerId">applicationLoadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#application_load_balancer_id ApplicationLoadBalancerSubnetAssociation#application_load_balancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#name ApplicationLoadBalancerSubnetAssociation#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#subnet_id ApplicationLoadBalancerSubnetAssociation#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#id ApplicationLoadBalancerSubnetAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#tags ApplicationLoadBalancerSubnetAssociation#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts">ApplicationLoadBalancerSubnetAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationLoadBalancerId`<sup>Required</sup> <a name="applicationLoadBalancerId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.applicationLoadBalancerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#application_load_balancer_id ApplicationLoadBalancerSubnetAssociation#application_load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#name ApplicationLoadBalancerSubnetAssociation#name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#subnet_id ApplicationLoadBalancerSubnetAssociation#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#id ApplicationLoadBalancerSubnetAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#tags ApplicationLoadBalancerSubnetAssociation#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts">ApplicationLoadBalancerSubnetAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#timeouts ApplicationLoadBalancerSubnetAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.putTimeouts"></a>

```java
public void putTimeouts(ApplicationLoadBalancerSubnetAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts">ApplicationLoadBalancerSubnetAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationLoadBalancerSubnetAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_load_balancer_subnet_association.ApplicationLoadBalancerSubnetAssociation;

ApplicationLoadBalancerSubnetAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_load_balancer_subnet_association.ApplicationLoadBalancerSubnetAssociation;

ApplicationLoadBalancerSubnetAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_load_balancer_subnet_association.ApplicationLoadBalancerSubnetAssociation;

ApplicationLoadBalancerSubnetAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_load_balancer_subnet_association.ApplicationLoadBalancerSubnetAssociation;

ApplicationLoadBalancerSubnetAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApplicationLoadBalancerSubnetAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApplicationLoadBalancerSubnetAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApplicationLoadBalancerSubnetAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApplicationLoadBalancerSubnetAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationLoadBalancerSubnetAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference">ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.applicationLoadBalancerIdInput">applicationLoadBalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts">ApplicationLoadBalancerSubnetAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.applicationLoadBalancerId">applicationLoadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.timeouts"></a>

```java
public ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference">ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference</a>

---

##### `applicationLoadBalancerIdInput`<sup>Optional</sup> <a name="applicationLoadBalancerIdInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.applicationLoadBalancerIdInput"></a>

```java
public java.lang.String getApplicationLoadBalancerIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts">ApplicationLoadBalancerSubnetAssociationTimeouts</a>

---

##### `applicationLoadBalancerId`<sup>Required</sup> <a name="applicationLoadBalancerId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.applicationLoadBalancerId"></a>

```java
public java.lang.String getApplicationLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationLoadBalancerSubnetAssociationConfig <a name="ApplicationLoadBalancerSubnetAssociationConfig" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_load_balancer_subnet_association.ApplicationLoadBalancerSubnetAssociationConfig;

ApplicationLoadBalancerSubnetAssociationConfig.builder()
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
    .applicationLoadBalancerId(java.lang.String)
    .name(java.lang.String)
    .subnetId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ApplicationLoadBalancerSubnetAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.applicationLoadBalancerId">applicationLoadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#application_load_balancer_id ApplicationLoadBalancerSubnetAssociation#application_load_balancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#name ApplicationLoadBalancerSubnetAssociation#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#subnet_id ApplicationLoadBalancerSubnetAssociation#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#id ApplicationLoadBalancerSubnetAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#tags ApplicationLoadBalancerSubnetAssociation#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts">ApplicationLoadBalancerSubnetAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationLoadBalancerId`<sup>Required</sup> <a name="applicationLoadBalancerId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.applicationLoadBalancerId"></a>

```java
public java.lang.String getApplicationLoadBalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#application_load_balancer_id ApplicationLoadBalancerSubnetAssociation#application_load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#name ApplicationLoadBalancerSubnetAssociation#name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#subnet_id ApplicationLoadBalancerSubnetAssociation#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#id ApplicationLoadBalancerSubnetAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#tags ApplicationLoadBalancerSubnetAssociation#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationConfig.property.timeouts"></a>

```java
public ApplicationLoadBalancerSubnetAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts">ApplicationLoadBalancerSubnetAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#timeouts ApplicationLoadBalancerSubnetAssociation#timeouts}

---

### ApplicationLoadBalancerSubnetAssociationTimeouts <a name="ApplicationLoadBalancerSubnetAssociationTimeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_load_balancer_subnet_association.ApplicationLoadBalancerSubnetAssociationTimeouts;

ApplicationLoadBalancerSubnetAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#create ApplicationLoadBalancerSubnetAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#delete ApplicationLoadBalancerSubnetAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#read ApplicationLoadBalancerSubnetAssociation#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#update ApplicationLoadBalancerSubnetAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#create ApplicationLoadBalancerSubnetAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#delete ApplicationLoadBalancerSubnetAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#read ApplicationLoadBalancerSubnetAssociation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/application_load_balancer_subnet_association#update ApplicationLoadBalancerSubnetAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference <a name="ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.application_load_balancer_subnet_association.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference;

new ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts">ApplicationLoadBalancerSubnetAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.applicationLoadBalancerSubnetAssociation.ApplicationLoadBalancerSubnetAssociationTimeouts">ApplicationLoadBalancerSubnetAssociationTimeouts</a>

---



