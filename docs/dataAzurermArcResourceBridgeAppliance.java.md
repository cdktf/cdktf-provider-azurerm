# `dataAzurermArcResourceBridgeAppliance` Submodule <a name="`dataAzurermArcResourceBridgeAppliance` Submodule" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermArcResourceBridgeAppliance <a name="DataAzurermArcResourceBridgeAppliance" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/arc_resource_bridge_appliance azurerm_arc_resource_bridge_appliance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_arc_resource_bridge_appliance.DataAzurermArcResourceBridgeAppliance;

DataAzurermArcResourceBridgeAppliance.Builder.create(Construct scope, java.lang.String id)
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
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermArcResourceBridgeApplianceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/arc_resource_bridge_appliance#name DataAzurermArcResourceBridgeAppliance#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/arc_resource_bridge_appliance#resource_group_name DataAzurermArcResourceBridgeAppliance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/arc_resource_bridge_appliance#id DataAzurermArcResourceBridgeAppliance#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/arc_resource_bridge_appliance#name DataAzurermArcResourceBridgeAppliance#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/arc_resource_bridge_appliance#resource_group_name DataAzurermArcResourceBridgeAppliance#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/arc_resource_bridge_appliance#id DataAzurermArcResourceBridgeAppliance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/arc_resource_bridge_appliance#timeouts DataAzurermArcResourceBridgeAppliance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermArcResourceBridgeApplianceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermArcResourceBridgeAppliance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_arc_resource_bridge_appliance.DataAzurermArcResourceBridgeAppliance;

DataAzurermArcResourceBridgeAppliance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_arc_resource_bridge_appliance.DataAzurermArcResourceBridgeAppliance;

DataAzurermArcResourceBridgeAppliance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_arc_resource_bridge_appliance.DataAzurermArcResourceBridgeAppliance;

DataAzurermArcResourceBridgeAppliance.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_arc_resource_bridge_appliance.DataAzurermArcResourceBridgeAppliance;

DataAzurermArcResourceBridgeAppliance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermArcResourceBridgeAppliance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermArcResourceBridgeAppliance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermArcResourceBridgeAppliance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermArcResourceBridgeAppliance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/arc_resource_bridge_appliance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermArcResourceBridgeAppliance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.distro">distro</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList">DataAzurermArcResourceBridgeApplianceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.infrastructureProvider">infrastructureProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.publicKeyBase64">publicKeyBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference">DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `distro`<sup>Required</sup> <a name="distro" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.distro"></a>

```java
public java.lang.String getDistro();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.identity"></a>

```java
public DataAzurermArcResourceBridgeApplianceIdentityList getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList">DataAzurermArcResourceBridgeApplianceIdentityList</a>

---

##### `infrastructureProvider`<sup>Required</sup> <a name="infrastructureProvider" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.infrastructureProvider"></a>

```java
public java.lang.String getInfrastructureProvider();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `publicKeyBase64`<sup>Required</sup> <a name="publicKeyBase64" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.publicKeyBase64"></a>

```java
public java.lang.String getPublicKeyBase64();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.timeouts"></a>

```java
public DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference">DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermArcResourceBridgeApplianceConfig <a name="DataAzurermArcResourceBridgeApplianceConfig" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_arc_resource_bridge_appliance.DataAzurermArcResourceBridgeApplianceConfig;

DataAzurermArcResourceBridgeApplianceConfig.builder()
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
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermArcResourceBridgeApplianceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/arc_resource_bridge_appliance#name DataAzurermArcResourceBridgeAppliance#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/arc_resource_bridge_appliance#resource_group_name DataAzurermArcResourceBridgeAppliance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/arc_resource_bridge_appliance#id DataAzurermArcResourceBridgeAppliance#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/arc_resource_bridge_appliance#name DataAzurermArcResourceBridgeAppliance#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/arc_resource_bridge_appliance#resource_group_name DataAzurermArcResourceBridgeAppliance#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/arc_resource_bridge_appliance#id DataAzurermArcResourceBridgeAppliance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.timeouts"></a>

```java
public DataAzurermArcResourceBridgeApplianceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/arc_resource_bridge_appliance#timeouts DataAzurermArcResourceBridgeAppliance#timeouts}

---

### DataAzurermArcResourceBridgeApplianceIdentity <a name="DataAzurermArcResourceBridgeApplianceIdentity" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_arc_resource_bridge_appliance.DataAzurermArcResourceBridgeApplianceIdentity;

DataAzurermArcResourceBridgeApplianceIdentity.builder()
    .build();
```


### DataAzurermArcResourceBridgeApplianceTimeouts <a name="DataAzurermArcResourceBridgeApplianceTimeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_arc_resource_bridge_appliance.DataAzurermArcResourceBridgeApplianceTimeouts;

DataAzurermArcResourceBridgeApplianceTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/arc_resource_bridge_appliance#read DataAzurermArcResourceBridgeAppliance#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/arc_resource_bridge_appliance#read DataAzurermArcResourceBridgeAppliance#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermArcResourceBridgeApplianceIdentityList <a name="DataAzurermArcResourceBridgeApplianceIdentityList" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_arc_resource_bridge_appliance.DataAzurermArcResourceBridgeApplianceIdentityList;

new DataAzurermArcResourceBridgeApplianceIdentityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.get"></a>

```java
public DataAzurermArcResourceBridgeApplianceIdentityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermArcResourceBridgeApplianceIdentityOutputReference <a name="DataAzurermArcResourceBridgeApplianceIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_arc_resource_bridge_appliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference;

new DataAzurermArcResourceBridgeApplianceIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentity">DataAzurermArcResourceBridgeApplianceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.internalValue"></a>

```java
public DataAzurermArcResourceBridgeApplianceIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentity">DataAzurermArcResourceBridgeApplianceIdentity</a>

---


### DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference <a name="DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_arc_resource_bridge_appliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference;

new DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a>

---



