# `devTestVirtualNetwork` Submodule <a name="`devTestVirtualNetwork` Submodule" id="@cdktf/provider-azurerm.devTestVirtualNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevTestVirtualNetwork <a name="DevTestVirtualNetwork" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network azurerm_dev_test_virtual_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_virtual_network.DevTestVirtualNetwork;

DevTestVirtualNetwork.Builder.create(Construct scope, java.lang.String id)
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
    .labName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .subnet(DevTestVirtualNetworkSubnet)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DevTestVirtualNetworkTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.labName">labName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#lab_name DevTestVirtualNetwork#lab_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#name DevTestVirtualNetwork#name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#resource_group_name DevTestVirtualNetwork#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#description DevTestVirtualNetwork#description}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#id DevTestVirtualNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet">DevTestVirtualNetworkSubnet</a></code> | subnet block. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#tags DevTestVirtualNetwork#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts">DevTestVirtualNetworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `labName`<sup>Required</sup> <a name="labName" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.labName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#lab_name DevTestVirtualNetwork#lab_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#name DevTestVirtualNetwork#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#resource_group_name DevTestVirtualNetwork#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#description DevTestVirtualNetwork#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#id DevTestVirtualNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.subnet"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet">DevTestVirtualNetworkSubnet</a>

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#subnet DevTestVirtualNetwork#subnet}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#tags DevTestVirtualNetwork#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts">DevTestVirtualNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#timeouts DevTestVirtualNetwork#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.putSubnet">putSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetSubnet">resetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSubnet` <a name="putSubnet" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.putSubnet"></a>

```java
public void putSubnet(DevTestVirtualNetworkSubnet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.putSubnet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet">DevTestVirtualNetworkSubnet</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.putTimeouts"></a>

```java
public void putTimeouts(DevTestVirtualNetworkTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts">DevTestVirtualNetworkTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetId"></a>

```java
public void resetId()
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetSubnet"></a>

```java
public void resetSubnet()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevTestVirtualNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_virtual_network.DevTestVirtualNetwork;

DevTestVirtualNetwork.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_virtual_network.DevTestVirtualNetwork;

DevTestVirtualNetwork.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_virtual_network.DevTestVirtualNetwork;

DevTestVirtualNetwork.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_virtual_network.DevTestVirtualNetwork;

DevTestVirtualNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevTestVirtualNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DevTestVirtualNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevTestVirtualNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevTestVirtualNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DevTestVirtualNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference">DevTestVirtualNetworkSubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference">DevTestVirtualNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.uniqueIdentifier">uniqueIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.labNameInput">labNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.subnetInput">subnetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet">DevTestVirtualNetworkSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts">DevTestVirtualNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.labName">labName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.subnet"></a>

```java
public DevTestVirtualNetworkSubnetOutputReference getSubnet();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference">DevTestVirtualNetworkSubnetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.timeouts"></a>

```java
public DevTestVirtualNetworkTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference">DevTestVirtualNetworkTimeoutsOutputReference</a>

---

##### `uniqueIdentifier`<sup>Required</sup> <a name="uniqueIdentifier" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.uniqueIdentifier"></a>

```java
public java.lang.String getUniqueIdentifier();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labNameInput`<sup>Optional</sup> <a name="labNameInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.labNameInput"></a>

```java
public java.lang.String getLabNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.subnetInput"></a>

```java
public DevTestVirtualNetworkSubnet getSubnetInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet">DevTestVirtualNetworkSubnet</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts">DevTestVirtualNetworkTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labName`<sup>Required</sup> <a name="labName" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.labName"></a>

```java
public java.lang.String getLabName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetwork.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevTestVirtualNetworkConfig <a name="DevTestVirtualNetworkConfig" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_virtual_network.DevTestVirtualNetworkConfig;

DevTestVirtualNetworkConfig.builder()
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
    .labName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .subnet(DevTestVirtualNetworkSubnet)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DevTestVirtualNetworkTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.labName">labName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#lab_name DevTestVirtualNetwork#lab_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#name DevTestVirtualNetwork#name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#resource_group_name DevTestVirtualNetwork#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#description DevTestVirtualNetwork#description}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#id DevTestVirtualNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet">DevTestVirtualNetworkSubnet</a></code> | subnet block. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#tags DevTestVirtualNetwork#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts">DevTestVirtualNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `labName`<sup>Required</sup> <a name="labName" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.labName"></a>

```java
public java.lang.String getLabName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#lab_name DevTestVirtualNetwork#lab_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#name DevTestVirtualNetwork#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#resource_group_name DevTestVirtualNetwork#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#description DevTestVirtualNetwork#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#id DevTestVirtualNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.subnet"></a>

```java
public DevTestVirtualNetworkSubnet getSubnet();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet">DevTestVirtualNetworkSubnet</a>

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#subnet DevTestVirtualNetwork#subnet}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#tags DevTestVirtualNetwork#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkConfig.property.timeouts"></a>

```java
public DevTestVirtualNetworkTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts">DevTestVirtualNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#timeouts DevTestVirtualNetwork#timeouts}

---

### DevTestVirtualNetworkSubnet <a name="DevTestVirtualNetworkSubnet" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_virtual_network.DevTestVirtualNetworkSubnet;

DevTestVirtualNetworkSubnet.builder()
//  .sharedPublicIpAddress(DevTestVirtualNetworkSubnetSharedPublicIpAddress)
//  .useInVirtualMachineCreation(java.lang.String)
//  .usePublicIpAddress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet.property.sharedPublicIpAddress">sharedPublicIpAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress">DevTestVirtualNetworkSubnetSharedPublicIpAddress</a></code> | shared_public_ip_address block. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet.property.useInVirtualMachineCreation">useInVirtualMachineCreation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#use_in_virtual_machine_creation DevTestVirtualNetwork#use_in_virtual_machine_creation}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet.property.usePublicIpAddress">usePublicIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#use_public_ip_address DevTestVirtualNetwork#use_public_ip_address}. |

---

##### `sharedPublicIpAddress`<sup>Optional</sup> <a name="sharedPublicIpAddress" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet.property.sharedPublicIpAddress"></a>

```java
public DevTestVirtualNetworkSubnetSharedPublicIpAddress getSharedPublicIpAddress();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress">DevTestVirtualNetworkSubnetSharedPublicIpAddress</a>

shared_public_ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#shared_public_ip_address DevTestVirtualNetwork#shared_public_ip_address}

---

##### `useInVirtualMachineCreation`<sup>Optional</sup> <a name="useInVirtualMachineCreation" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet.property.useInVirtualMachineCreation"></a>

```java
public java.lang.String getUseInVirtualMachineCreation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#use_in_virtual_machine_creation DevTestVirtualNetwork#use_in_virtual_machine_creation}.

---

##### `usePublicIpAddress`<sup>Optional</sup> <a name="usePublicIpAddress" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet.property.usePublicIpAddress"></a>

```java
public java.lang.String getUsePublicIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#use_public_ip_address DevTestVirtualNetwork#use_public_ip_address}.

---

### DevTestVirtualNetworkSubnetSharedPublicIpAddress <a name="DevTestVirtualNetworkSubnetSharedPublicIpAddress" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_virtual_network.DevTestVirtualNetworkSubnetSharedPublicIpAddress;

DevTestVirtualNetworkSubnetSharedPublicIpAddress.builder()
//  .allowedPorts(IResolvable)
//  .allowedPorts(java.util.List<DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress.property.allowedPorts">allowedPorts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts</a>></code> | allowed_ports block. |

---

##### `allowedPorts`<sup>Optional</sup> <a name="allowedPorts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress.property.allowedPorts"></a>

```java
public java.lang.Object getAllowedPorts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts</a>>

allowed_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#allowed_ports DevTestVirtualNetwork#allowed_ports}

---

### DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts <a name="DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_virtual_network.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts;

DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts.builder()
//  .backendPort(java.lang.Number)
//  .transportProtocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#backend_port DevTestVirtualNetwork#backend_port}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts.property.transportProtocol">transportProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#transport_protocol DevTestVirtualNetwork#transport_protocol}. |

---

##### `backendPort`<sup>Optional</sup> <a name="backendPort" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#backend_port DevTestVirtualNetwork#backend_port}.

---

##### `transportProtocol`<sup>Optional</sup> <a name="transportProtocol" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts.property.transportProtocol"></a>

```java
public java.lang.String getTransportProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#transport_protocol DevTestVirtualNetwork#transport_protocol}.

---

### DevTestVirtualNetworkTimeouts <a name="DevTestVirtualNetworkTimeouts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_virtual_network.DevTestVirtualNetworkTimeouts;

DevTestVirtualNetworkTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#create DevTestVirtualNetwork#create}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#delete DevTestVirtualNetwork#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#read DevTestVirtualNetwork#read}. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#update DevTestVirtualNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#create DevTestVirtualNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#delete DevTestVirtualNetwork#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#read DevTestVirtualNetwork#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/dev_test_virtual_network#update DevTestVirtualNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevTestVirtualNetworkSubnetOutputReference <a name="DevTestVirtualNetworkSubnetOutputReference" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_virtual_network.DevTestVirtualNetworkSubnetOutputReference;

new DevTestVirtualNetworkSubnetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.putSharedPublicIpAddress">putSharedPublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.resetSharedPublicIpAddress">resetSharedPublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.resetUseInVirtualMachineCreation">resetUseInVirtualMachineCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.resetUsePublicIpAddress">resetUsePublicIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSharedPublicIpAddress` <a name="putSharedPublicIpAddress" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.putSharedPublicIpAddress"></a>

```java
public void putSharedPublicIpAddress(DevTestVirtualNetworkSubnetSharedPublicIpAddress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.putSharedPublicIpAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress">DevTestVirtualNetworkSubnetSharedPublicIpAddress</a>

---

##### `resetSharedPublicIpAddress` <a name="resetSharedPublicIpAddress" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.resetSharedPublicIpAddress"></a>

```java
public void resetSharedPublicIpAddress()
```

##### `resetUseInVirtualMachineCreation` <a name="resetUseInVirtualMachineCreation" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.resetUseInVirtualMachineCreation"></a>

```java
public void resetUseInVirtualMachineCreation()
```

##### `resetUsePublicIpAddress` <a name="resetUsePublicIpAddress" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.resetUsePublicIpAddress"></a>

```java
public void resetUsePublicIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.sharedPublicIpAddress">sharedPublicIpAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference">DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.sharedPublicIpAddressInput">sharedPublicIpAddressInput</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress">DevTestVirtualNetworkSubnetSharedPublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.useInVirtualMachineCreationInput">useInVirtualMachineCreationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.usePublicIpAddressInput">usePublicIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.useInVirtualMachineCreation">useInVirtualMachineCreation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.usePublicIpAddress">usePublicIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet">DevTestVirtualNetworkSubnet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sharedPublicIpAddress`<sup>Required</sup> <a name="sharedPublicIpAddress" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.sharedPublicIpAddress"></a>

```java
public DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference getSharedPublicIpAddress();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference">DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference</a>

---

##### `sharedPublicIpAddressInput`<sup>Optional</sup> <a name="sharedPublicIpAddressInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.sharedPublicIpAddressInput"></a>

```java
public DevTestVirtualNetworkSubnetSharedPublicIpAddress getSharedPublicIpAddressInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress">DevTestVirtualNetworkSubnetSharedPublicIpAddress</a>

---

##### `useInVirtualMachineCreationInput`<sup>Optional</sup> <a name="useInVirtualMachineCreationInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.useInVirtualMachineCreationInput"></a>

```java
public java.lang.String getUseInVirtualMachineCreationInput();
```

- *Type:* java.lang.String

---

##### `usePublicIpAddressInput`<sup>Optional</sup> <a name="usePublicIpAddressInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.usePublicIpAddressInput"></a>

```java
public java.lang.String getUsePublicIpAddressInput();
```

- *Type:* java.lang.String

---

##### `useInVirtualMachineCreation`<sup>Required</sup> <a name="useInVirtualMachineCreation" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.useInVirtualMachineCreation"></a>

```java
public java.lang.String getUseInVirtualMachineCreation();
```

- *Type:* java.lang.String

---

##### `usePublicIpAddress`<sup>Required</sup> <a name="usePublicIpAddress" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.usePublicIpAddress"></a>

```java
public java.lang.String getUsePublicIpAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetOutputReference.property.internalValue"></a>

```java
public DevTestVirtualNetworkSubnet getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnet">DevTestVirtualNetworkSubnet</a>

---


### DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList <a name="DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_virtual_network.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList;

new DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.get"></a>

```java
public DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts</a>>

---


### DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference <a name="DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_virtual_network.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference;

new DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.resetBackendPort">resetBackendPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.resetTransportProtocol">resetTransportProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackendPort` <a name="resetBackendPort" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.resetBackendPort"></a>

```java
public void resetBackendPort()
```

##### `resetTransportProtocol` <a name="resetTransportProtocol" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.resetTransportProtocol"></a>

```java
public void resetTransportProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.backendPortInput">backendPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.transportProtocolInput">transportProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.transportProtocol">transportProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendPortInput`<sup>Optional</sup> <a name="backendPortInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.backendPortInput"></a>

```java
public java.lang.Number getBackendPortInput();
```

- *Type:* java.lang.Number

---

##### `transportProtocolInput`<sup>Optional</sup> <a name="transportProtocolInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.transportProtocolInput"></a>

```java
public java.lang.String getTransportProtocolInput();
```

- *Type:* java.lang.String

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

---

##### `transportProtocol`<sup>Required</sup> <a name="transportProtocol" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.transportProtocol"></a>

```java
public java.lang.String getTransportProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts</a>

---


### DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference <a name="DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_virtual_network.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference;

new DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.putAllowedPorts">putAllowedPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.resetAllowedPorts">resetAllowedPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedPorts` <a name="putAllowedPorts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.putAllowedPorts"></a>

```java
public void putAllowedPorts(IResolvable OR java.util.List<DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.putAllowedPorts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts</a>>

---

##### `resetAllowedPorts` <a name="resetAllowedPorts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.resetAllowedPorts"></a>

```java
public void resetAllowedPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.allowedPorts">allowedPorts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.allowedPortsInput">allowedPortsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress">DevTestVirtualNetworkSubnetSharedPublicIpAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedPorts`<sup>Required</sup> <a name="allowedPorts" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.allowedPorts"></a>

```java
public DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList getAllowedPorts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPortsList</a>

---

##### `allowedPortsInput`<sup>Optional</sup> <a name="allowedPortsInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.allowedPortsInput"></a>

```java
public java.lang.Object getAllowedPortsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts">DevTestVirtualNetworkSubnetSharedPublicIpAddressAllowedPorts</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddressOutputReference.property.internalValue"></a>

```java
public DevTestVirtualNetworkSubnetSharedPublicIpAddress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkSubnetSharedPublicIpAddress">DevTestVirtualNetworkSubnetSharedPublicIpAddress</a>

---


### DevTestVirtualNetworkTimeoutsOutputReference <a name="DevTestVirtualNetworkTimeoutsOutputReference" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_virtual_network.DevTestVirtualNetworkTimeoutsOutputReference;

new DevTestVirtualNetworkTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts">DevTestVirtualNetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestVirtualNetwork.DevTestVirtualNetworkTimeouts">DevTestVirtualNetworkTimeouts</a>

---



