# `iotSecurityDeviceGroup` Submodule <a name="`iotSecurityDeviceGroup` Submodule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotSecurityDeviceGroup <a name="IotSecurityDeviceGroup" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group azurerm_iot_security_device_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_device_group.IotSecurityDeviceGroup;

IotSecurityDeviceGroup.Builder.create(Construct scope, java.lang.String id)
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
    .iothubId(java.lang.String)
    .name(java.lang.String)
//  .allowRule(IotSecurityDeviceGroupAllowRule)
//  .id(java.lang.String)
//  .rangeRule(IResolvable)
//  .rangeRule(java.util.List<IotSecurityDeviceGroupRangeRule>)
//  .timeouts(IotSecurityDeviceGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.iothubId">iothubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#iothub_id IotSecurityDeviceGroup#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#name IotSecurityDeviceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.allowRule">allowRule</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a></code> | allow_rule block. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#id IotSecurityDeviceGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.rangeRule">rangeRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a>></code> | range_rule block. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts">IotSecurityDeviceGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.iothubId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#iothub_id IotSecurityDeviceGroup#iothub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#name IotSecurityDeviceGroup#name}.

---

##### `allowRule`<sup>Optional</sup> <a name="allowRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.allowRule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a>

allow_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#allow_rule IotSecurityDeviceGroup#allow_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#id IotSecurityDeviceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rangeRule`<sup>Optional</sup> <a name="rangeRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.rangeRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a>>

range_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#range_rule IotSecurityDeviceGroup#range_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts">IotSecurityDeviceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#timeouts IotSecurityDeviceGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putAllowRule">putAllowRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putRangeRule">putRangeRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetAllowRule">resetAllowRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetRangeRule">resetRangeRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllowRule` <a name="putAllowRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putAllowRule"></a>

```java
public void putAllowRule(IotSecurityDeviceGroupAllowRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putAllowRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a>

---

##### `putRangeRule` <a name="putRangeRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putRangeRule"></a>

```java
public void putRangeRule(IResolvable OR java.util.List<IotSecurityDeviceGroupRangeRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putRangeRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putTimeouts"></a>

```java
public void putTimeouts(IotSecurityDeviceGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts">IotSecurityDeviceGroupTimeouts</a>

---

##### `resetAllowRule` <a name="resetAllowRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetAllowRule"></a>

```java
public void resetAllowRule()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetId"></a>

```java
public void resetId()
```

##### `resetRangeRule` <a name="resetRangeRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetRangeRule"></a>

```java
public void resetRangeRule()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IotSecurityDeviceGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_device_group.IotSecurityDeviceGroup;

IotSecurityDeviceGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_device_group.IotSecurityDeviceGroup;

IotSecurityDeviceGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_device_group.IotSecurityDeviceGroup;

IotSecurityDeviceGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_device_group.IotSecurityDeviceGroup;

IotSecurityDeviceGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotSecurityDeviceGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IotSecurityDeviceGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotSecurityDeviceGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotSecurityDeviceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IotSecurityDeviceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.allowRule">allowRule</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference">IotSecurityDeviceGroupAllowRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.rangeRule">rangeRule</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList">IotSecurityDeviceGroupRangeRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference">IotSecurityDeviceGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.allowRuleInput">allowRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.iothubIdInput">iothubIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.rangeRuleInput">rangeRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts">IotSecurityDeviceGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.iothubId">iothubId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowRule`<sup>Required</sup> <a name="allowRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.allowRule"></a>

```java
public IotSecurityDeviceGroupAllowRuleOutputReference getAllowRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference">IotSecurityDeviceGroupAllowRuleOutputReference</a>

---

##### `rangeRule`<sup>Required</sup> <a name="rangeRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.rangeRule"></a>

```java
public IotSecurityDeviceGroupRangeRuleList getRangeRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList">IotSecurityDeviceGroupRangeRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.timeouts"></a>

```java
public IotSecurityDeviceGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference">IotSecurityDeviceGroupTimeoutsOutputReference</a>

---

##### `allowRuleInput`<sup>Optional</sup> <a name="allowRuleInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.allowRuleInput"></a>

```java
public IotSecurityDeviceGroupAllowRule getAllowRuleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `iothubIdInput`<sup>Optional</sup> <a name="iothubIdInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.iothubIdInput"></a>

```java
public java.lang.String getIothubIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rangeRuleInput`<sup>Optional</sup> <a name="rangeRuleInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.rangeRuleInput"></a>

```java
public java.lang.Object getRangeRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts">IotSecurityDeviceGroupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.iothubId"></a>

```java
public java.lang.String getIothubId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotSecurityDeviceGroupAllowRule <a name="IotSecurityDeviceGroupAllowRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_device_group.IotSecurityDeviceGroupAllowRule;

IotSecurityDeviceGroupAllowRule.builder()
//  .connectionFromIpsNotAllowed(java.util.List<java.lang.String>)
//  .connectionToIpsNotAllowed(java.util.List<java.lang.String>)
//  .localUsersNotAllowed(java.util.List<java.lang.String>)
//  .processesNotAllowed(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.connectionFromIpsNotAllowed">connectionFromIpsNotAllowed</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#connection_from_ips_not_allowed IotSecurityDeviceGroup#connection_from_ips_not_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.connectionToIpsNotAllowed">connectionToIpsNotAllowed</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#connection_to_ips_not_allowed IotSecurityDeviceGroup#connection_to_ips_not_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.localUsersNotAllowed">localUsersNotAllowed</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#local_users_not_allowed IotSecurityDeviceGroup#local_users_not_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.processesNotAllowed">processesNotAllowed</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#processes_not_allowed IotSecurityDeviceGroup#processes_not_allowed}. |

---

##### `connectionFromIpsNotAllowed`<sup>Optional</sup> <a name="connectionFromIpsNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.connectionFromIpsNotAllowed"></a>

```java
public java.util.List<java.lang.String> getConnectionFromIpsNotAllowed();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#connection_from_ips_not_allowed IotSecurityDeviceGroup#connection_from_ips_not_allowed}.

---

##### `connectionToIpsNotAllowed`<sup>Optional</sup> <a name="connectionToIpsNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.connectionToIpsNotAllowed"></a>

```java
public java.util.List<java.lang.String> getConnectionToIpsNotAllowed();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#connection_to_ips_not_allowed IotSecurityDeviceGroup#connection_to_ips_not_allowed}.

---

##### `localUsersNotAllowed`<sup>Optional</sup> <a name="localUsersNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.localUsersNotAllowed"></a>

```java
public java.util.List<java.lang.String> getLocalUsersNotAllowed();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#local_users_not_allowed IotSecurityDeviceGroup#local_users_not_allowed}.

---

##### `processesNotAllowed`<sup>Optional</sup> <a name="processesNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule.property.processesNotAllowed"></a>

```java
public java.util.List<java.lang.String> getProcessesNotAllowed();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#processes_not_allowed IotSecurityDeviceGroup#processes_not_allowed}.

---

### IotSecurityDeviceGroupConfig <a name="IotSecurityDeviceGroupConfig" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_device_group.IotSecurityDeviceGroupConfig;

IotSecurityDeviceGroupConfig.builder()
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
    .iothubId(java.lang.String)
    .name(java.lang.String)
//  .allowRule(IotSecurityDeviceGroupAllowRule)
//  .id(java.lang.String)
//  .rangeRule(IResolvable)
//  .rangeRule(java.util.List<IotSecurityDeviceGroupRangeRule>)
//  .timeouts(IotSecurityDeviceGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.iothubId">iothubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#iothub_id IotSecurityDeviceGroup#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#name IotSecurityDeviceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.allowRule">allowRule</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a></code> | allow_rule block. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#id IotSecurityDeviceGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.rangeRule">rangeRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a>></code> | range_rule block. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts">IotSecurityDeviceGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.iothubId"></a>

```java
public java.lang.String getIothubId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#iothub_id IotSecurityDeviceGroup#iothub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#name IotSecurityDeviceGroup#name}.

---

##### `allowRule`<sup>Optional</sup> <a name="allowRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.allowRule"></a>

```java
public IotSecurityDeviceGroupAllowRule getAllowRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a>

allow_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#allow_rule IotSecurityDeviceGroup#allow_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#id IotSecurityDeviceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rangeRule`<sup>Optional</sup> <a name="rangeRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.rangeRule"></a>

```java
public java.lang.Object getRangeRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a>>

range_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#range_rule IotSecurityDeviceGroup#range_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupConfig.property.timeouts"></a>

```java
public IotSecurityDeviceGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts">IotSecurityDeviceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#timeouts IotSecurityDeviceGroup#timeouts}

---

### IotSecurityDeviceGroupRangeRule <a name="IotSecurityDeviceGroupRangeRule" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_device_group.IotSecurityDeviceGroupRangeRule;

IotSecurityDeviceGroupRangeRule.builder()
    .duration(java.lang.String)
    .max(java.lang.Number)
    .min(java.lang.Number)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.duration">duration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#duration IotSecurityDeviceGroup#duration}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#max IotSecurityDeviceGroup#max}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#min IotSecurityDeviceGroup#min}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#type IotSecurityDeviceGroup#type}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#duration IotSecurityDeviceGroup#duration}.

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#max IotSecurityDeviceGroup#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#min IotSecurityDeviceGroup#min}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#type IotSecurityDeviceGroup#type}.

---

### IotSecurityDeviceGroupTimeouts <a name="IotSecurityDeviceGroupTimeouts" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_device_group.IotSecurityDeviceGroupTimeouts;

IotSecurityDeviceGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#create IotSecurityDeviceGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#delete IotSecurityDeviceGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#read IotSecurityDeviceGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#update IotSecurityDeviceGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#create IotSecurityDeviceGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#delete IotSecurityDeviceGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#read IotSecurityDeviceGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/iot_security_device_group#update IotSecurityDeviceGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotSecurityDeviceGroupAllowRuleOutputReference <a name="IotSecurityDeviceGroupAllowRuleOutputReference" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_device_group.IotSecurityDeviceGroupAllowRuleOutputReference;

new IotSecurityDeviceGroupAllowRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetConnectionFromIpsNotAllowed">resetConnectionFromIpsNotAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetConnectionToIpsNotAllowed">resetConnectionToIpsNotAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetLocalUsersNotAllowed">resetLocalUsersNotAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetProcessesNotAllowed">resetProcessesNotAllowed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionFromIpsNotAllowed` <a name="resetConnectionFromIpsNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetConnectionFromIpsNotAllowed"></a>

```java
public void resetConnectionFromIpsNotAllowed()
```

##### `resetConnectionToIpsNotAllowed` <a name="resetConnectionToIpsNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetConnectionToIpsNotAllowed"></a>

```java
public void resetConnectionToIpsNotAllowed()
```

##### `resetLocalUsersNotAllowed` <a name="resetLocalUsersNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetLocalUsersNotAllowed"></a>

```java
public void resetLocalUsersNotAllowed()
```

##### `resetProcessesNotAllowed` <a name="resetProcessesNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.resetProcessesNotAllowed"></a>

```java
public void resetProcessesNotAllowed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionFromIpsNotAllowedInput">connectionFromIpsNotAllowedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionToIpsNotAllowedInput">connectionToIpsNotAllowedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.localUsersNotAllowedInput">localUsersNotAllowedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.processesNotAllowedInput">processesNotAllowedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionFromIpsNotAllowed">connectionFromIpsNotAllowed</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionToIpsNotAllowed">connectionToIpsNotAllowed</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.localUsersNotAllowed">localUsersNotAllowed</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.processesNotAllowed">processesNotAllowed</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionFromIpsNotAllowedInput`<sup>Optional</sup> <a name="connectionFromIpsNotAllowedInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionFromIpsNotAllowedInput"></a>

```java
public java.util.List<java.lang.String> getConnectionFromIpsNotAllowedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionToIpsNotAllowedInput`<sup>Optional</sup> <a name="connectionToIpsNotAllowedInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionToIpsNotAllowedInput"></a>

```java
public java.util.List<java.lang.String> getConnectionToIpsNotAllowedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `localUsersNotAllowedInput`<sup>Optional</sup> <a name="localUsersNotAllowedInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.localUsersNotAllowedInput"></a>

```java
public java.util.List<java.lang.String> getLocalUsersNotAllowedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `processesNotAllowedInput`<sup>Optional</sup> <a name="processesNotAllowedInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.processesNotAllowedInput"></a>

```java
public java.util.List<java.lang.String> getProcessesNotAllowedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionFromIpsNotAllowed`<sup>Required</sup> <a name="connectionFromIpsNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionFromIpsNotAllowed"></a>

```java
public java.util.List<java.lang.String> getConnectionFromIpsNotAllowed();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionToIpsNotAllowed`<sup>Required</sup> <a name="connectionToIpsNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.connectionToIpsNotAllowed"></a>

```java
public java.util.List<java.lang.String> getConnectionToIpsNotAllowed();
```

- *Type:* java.util.List<java.lang.String>

---

##### `localUsersNotAllowed`<sup>Required</sup> <a name="localUsersNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.localUsersNotAllowed"></a>

```java
public java.util.List<java.lang.String> getLocalUsersNotAllowed();
```

- *Type:* java.util.List<java.lang.String>

---

##### `processesNotAllowed`<sup>Required</sup> <a name="processesNotAllowed" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.processesNotAllowed"></a>

```java
public java.util.List<java.lang.String> getProcessesNotAllowed();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRuleOutputReference.property.internalValue"></a>

```java
public IotSecurityDeviceGroupAllowRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupAllowRule">IotSecurityDeviceGroupAllowRule</a>

---


### IotSecurityDeviceGroupRangeRuleList <a name="IotSecurityDeviceGroupRangeRuleList" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_device_group.IotSecurityDeviceGroupRangeRuleList;

new IotSecurityDeviceGroupRangeRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.get"></a>

```java
public IotSecurityDeviceGroupRangeRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a>>

---


### IotSecurityDeviceGroupRangeRuleOutputReference <a name="IotSecurityDeviceGroupRangeRuleOutputReference" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_device_group.IotSecurityDeviceGroupRangeRuleOutputReference;

new IotSecurityDeviceGroupRangeRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupRangeRule">IotSecurityDeviceGroupRangeRule</a>

---


### IotSecurityDeviceGroupTimeoutsOutputReference <a name="IotSecurityDeviceGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iot_security_device_group.IotSecurityDeviceGroupTimeoutsOutputReference;

new IotSecurityDeviceGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts">IotSecurityDeviceGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iotSecurityDeviceGroup.IotSecurityDeviceGroupTimeouts">IotSecurityDeviceGroupTimeouts</a>

---



