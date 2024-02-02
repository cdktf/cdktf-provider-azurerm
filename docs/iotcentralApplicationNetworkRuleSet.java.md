# `iotcentralApplicationNetworkRuleSet` Submodule <a name="`iotcentralApplicationNetworkRuleSet` Submodule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotcentralApplicationNetworkRuleSet <a name="IotcentralApplicationNetworkRuleSet" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set azurerm_iotcentral_application_network_rule_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iotcentral_application_network_rule_set.IotcentralApplicationNetworkRuleSet;

IotcentralApplicationNetworkRuleSet.Builder.create(Construct scope, java.lang.String id)
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
    .iotcentralApplicationId(java.lang.String)
//  .applyToDevice(java.lang.Boolean)
//  .applyToDevice(IResolvable)
//  .defaultAction(java.lang.String)
//  .id(java.lang.String)
//  .ipRule(IResolvable)
//  .ipRule(java.util.List<IotcentralApplicationNetworkRuleSetIpRule>)
//  .timeouts(IotcentralApplicationNetworkRuleSetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.iotcentralApplicationId">iotcentralApplicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#iotcentral_application_id IotcentralApplicationNetworkRuleSet#iotcentral_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.applyToDevice">applyToDevice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#apply_to_device IotcentralApplicationNetworkRuleSet#apply_to_device}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#default_action IotcentralApplicationNetworkRuleSet#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#id IotcentralApplicationNetworkRuleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.ipRule">ipRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>></code> | ip_rule block. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `iotcentralApplicationId`<sup>Required</sup> <a name="iotcentralApplicationId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.iotcentralApplicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#iotcentral_application_id IotcentralApplicationNetworkRuleSet#iotcentral_application_id}.

---

##### `applyToDevice`<sup>Optional</sup> <a name="applyToDevice" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.applyToDevice"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#apply_to_device IotcentralApplicationNetworkRuleSet#apply_to_device}.

---

##### `defaultAction`<sup>Optional</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.defaultAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#default_action IotcentralApplicationNetworkRuleSet#default_action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#id IotcentralApplicationNetworkRuleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipRule`<sup>Optional</sup> <a name="ipRule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.ipRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>>

ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#ip_rule IotcentralApplicationNetworkRuleSet#ip_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#timeouts IotcentralApplicationNetworkRuleSet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putIpRule">putIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetApplyToDevice">resetApplyToDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetDefaultAction">resetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetIpRule">resetIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIpRule` <a name="putIpRule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putIpRule"></a>

```java
public void putIpRule(IResolvable OR java.util.List<IotcentralApplicationNetworkRuleSetIpRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putIpRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putTimeouts"></a>

```java
public void putTimeouts(IotcentralApplicationNetworkRuleSetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a>

---

##### `resetApplyToDevice` <a name="resetApplyToDevice" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetApplyToDevice"></a>

```java
public void resetApplyToDevice()
```

##### `resetDefaultAction` <a name="resetDefaultAction" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetDefaultAction"></a>

```java
public void resetDefaultAction()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetId"></a>

```java
public void resetId()
```

##### `resetIpRule` <a name="resetIpRule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetIpRule"></a>

```java
public void resetIpRule()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IotcentralApplicationNetworkRuleSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iotcentral_application_network_rule_set.IotcentralApplicationNetworkRuleSet;

IotcentralApplicationNetworkRuleSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iotcentral_application_network_rule_set.IotcentralApplicationNetworkRuleSet;

IotcentralApplicationNetworkRuleSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iotcentral_application_network_rule_set.IotcentralApplicationNetworkRuleSet;

IotcentralApplicationNetworkRuleSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iotcentral_application_network_rule_set.IotcentralApplicationNetworkRuleSet;

IotcentralApplicationNetworkRuleSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotcentralApplicationNetworkRuleSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IotcentralApplicationNetworkRuleSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotcentralApplicationNetworkRuleSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotcentralApplicationNetworkRuleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IotcentralApplicationNetworkRuleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.ipRule">ipRule</a></code> | <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList">IotcentralApplicationNetworkRuleSetIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference">IotcentralApplicationNetworkRuleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.applyToDeviceInput">applyToDeviceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.defaultActionInput">defaultActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.iotcentralApplicationIdInput">iotcentralApplicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.ipRuleInput">ipRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.applyToDevice">applyToDevice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.iotcentralApplicationId">iotcentralApplicationId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipRule`<sup>Required</sup> <a name="ipRule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.ipRule"></a>

```java
public IotcentralApplicationNetworkRuleSetIpRuleList getIpRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList">IotcentralApplicationNetworkRuleSetIpRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.timeouts"></a>

```java
public IotcentralApplicationNetworkRuleSetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference">IotcentralApplicationNetworkRuleSetTimeoutsOutputReference</a>

---

##### `applyToDeviceInput`<sup>Optional</sup> <a name="applyToDeviceInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.applyToDeviceInput"></a>

```java
public java.lang.Object getApplyToDeviceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.defaultActionInput"></a>

```java
public java.lang.String getDefaultActionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `iotcentralApplicationIdInput`<sup>Optional</sup> <a name="iotcentralApplicationIdInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.iotcentralApplicationIdInput"></a>

```java
public java.lang.String getIotcentralApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `ipRuleInput`<sup>Optional</sup> <a name="ipRuleInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.ipRuleInput"></a>

```java
public java.lang.Object getIpRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a>

---

##### `applyToDevice`<sup>Required</sup> <a name="applyToDevice" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.applyToDevice"></a>

```java
public java.lang.Object getApplyToDevice();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `iotcentralApplicationId`<sup>Required</sup> <a name="iotcentralApplicationId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.iotcentralApplicationId"></a>

```java
public java.lang.String getIotcentralApplicationId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotcentralApplicationNetworkRuleSetConfig <a name="IotcentralApplicationNetworkRuleSetConfig" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iotcentral_application_network_rule_set.IotcentralApplicationNetworkRuleSetConfig;

IotcentralApplicationNetworkRuleSetConfig.builder()
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
    .iotcentralApplicationId(java.lang.String)
//  .applyToDevice(java.lang.Boolean)
//  .applyToDevice(IResolvable)
//  .defaultAction(java.lang.String)
//  .id(java.lang.String)
//  .ipRule(IResolvable)
//  .ipRule(java.util.List<IotcentralApplicationNetworkRuleSetIpRule>)
//  .timeouts(IotcentralApplicationNetworkRuleSetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.iotcentralApplicationId">iotcentralApplicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#iotcentral_application_id IotcentralApplicationNetworkRuleSet#iotcentral_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.applyToDevice">applyToDevice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#apply_to_device IotcentralApplicationNetworkRuleSet#apply_to_device}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#default_action IotcentralApplicationNetworkRuleSet#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#id IotcentralApplicationNetworkRuleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.ipRule">ipRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>></code> | ip_rule block. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `iotcentralApplicationId`<sup>Required</sup> <a name="iotcentralApplicationId" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.iotcentralApplicationId"></a>

```java
public java.lang.String getIotcentralApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#iotcentral_application_id IotcentralApplicationNetworkRuleSet#iotcentral_application_id}.

---

##### `applyToDevice`<sup>Optional</sup> <a name="applyToDevice" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.applyToDevice"></a>

```java
public java.lang.Object getApplyToDevice();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#apply_to_device IotcentralApplicationNetworkRuleSet#apply_to_device}.

---

##### `defaultAction`<sup>Optional</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#default_action IotcentralApplicationNetworkRuleSet#default_action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#id IotcentralApplicationNetworkRuleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipRule`<sup>Optional</sup> <a name="ipRule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.ipRule"></a>

```java
public java.lang.Object getIpRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>>

ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#ip_rule IotcentralApplicationNetworkRuleSet#ip_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.timeouts"></a>

```java
public IotcentralApplicationNetworkRuleSetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#timeouts IotcentralApplicationNetworkRuleSet#timeouts}

---

### IotcentralApplicationNetworkRuleSetIpRule <a name="IotcentralApplicationNetworkRuleSetIpRule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iotcentral_application_network_rule_set.IotcentralApplicationNetworkRuleSetIpRule;

IotcentralApplicationNetworkRuleSetIpRule.builder()
    .ipMask(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule.property.ipMask">ipMask</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#ip_mask IotcentralApplicationNetworkRuleSet#ip_mask}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#name IotcentralApplicationNetworkRuleSet#name}. |

---

##### `ipMask`<sup>Required</sup> <a name="ipMask" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule.property.ipMask"></a>

```java
public java.lang.String getIpMask();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#ip_mask IotcentralApplicationNetworkRuleSet#ip_mask}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#name IotcentralApplicationNetworkRuleSet#name}.

---

### IotcentralApplicationNetworkRuleSetTimeouts <a name="IotcentralApplicationNetworkRuleSetTimeouts" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iotcentral_application_network_rule_set.IotcentralApplicationNetworkRuleSetTimeouts;

IotcentralApplicationNetworkRuleSetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#create IotcentralApplicationNetworkRuleSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#delete IotcentralApplicationNetworkRuleSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#read IotcentralApplicationNetworkRuleSet#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#update IotcentralApplicationNetworkRuleSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#create IotcentralApplicationNetworkRuleSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#delete IotcentralApplicationNetworkRuleSet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#read IotcentralApplicationNetworkRuleSet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/iotcentral_application_network_rule_set#update IotcentralApplicationNetworkRuleSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotcentralApplicationNetworkRuleSetIpRuleList <a name="IotcentralApplicationNetworkRuleSetIpRuleList" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iotcentral_application_network_rule_set.IotcentralApplicationNetworkRuleSetIpRuleList;

new IotcentralApplicationNetworkRuleSetIpRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.get"></a>

```java
public IotcentralApplicationNetworkRuleSetIpRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>>

---


### IotcentralApplicationNetworkRuleSetIpRuleOutputReference <a name="IotcentralApplicationNetworkRuleSetIpRuleOutputReference" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iotcentral_application_network_rule_set.IotcentralApplicationNetworkRuleSetIpRuleOutputReference;

new IotcentralApplicationNetworkRuleSetIpRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.ipMaskInput">ipMaskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.ipMask">ipMask</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipMaskInput`<sup>Optional</sup> <a name="ipMaskInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.ipMaskInput"></a>

```java
public java.lang.String getIpMaskInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ipMask`<sup>Required</sup> <a name="ipMask" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.ipMask"></a>

```java
public java.lang.String getIpMask();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>

---


### IotcentralApplicationNetworkRuleSetTimeoutsOutputReference <a name="IotcentralApplicationNetworkRuleSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iotcentral_application_network_rule_set.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference;

new IotcentralApplicationNetworkRuleSetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a>

---



