# `dataAzurermExpressRouteCircuit` Submodule <a name="`dataAzurermExpressRouteCircuit` Submodule" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermExpressRouteCircuit <a name="DataAzurermExpressRouteCircuit" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/data-sources/express_route_circuit azurerm_express_route_circuit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_express_route_circuit.DataAzurermExpressRouteCircuit;

DataAzurermExpressRouteCircuit.Builder.create(Construct scope, java.lang.String id)
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
//  .timeouts(DataAzurermExpressRouteCircuitTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/data-sources/express_route_circuit#name DataAzurermExpressRouteCircuit#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/data-sources/express_route_circuit#resource_group_name DataAzurermExpressRouteCircuit#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/data-sources/express_route_circuit#id DataAzurermExpressRouteCircuit#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts">DataAzurermExpressRouteCircuitTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/data-sources/express_route_circuit#name DataAzurermExpressRouteCircuit#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/data-sources/express_route_circuit#resource_group_name DataAzurermExpressRouteCircuit#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/data-sources/express_route_circuit#id DataAzurermExpressRouteCircuit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts">DataAzurermExpressRouteCircuitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/data-sources/express_route_circuit#timeouts DataAzurermExpressRouteCircuit#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermExpressRouteCircuitTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts">DataAzurermExpressRouteCircuitTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermExpressRouteCircuit resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_express_route_circuit.DataAzurermExpressRouteCircuit;

DataAzurermExpressRouteCircuit.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_express_route_circuit.DataAzurermExpressRouteCircuit;

DataAzurermExpressRouteCircuit.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_express_route_circuit.DataAzurermExpressRouteCircuit;

DataAzurermExpressRouteCircuit.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_express_route_circuit.DataAzurermExpressRouteCircuit;

DataAzurermExpressRouteCircuit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermExpressRouteCircuit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermExpressRouteCircuit resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermExpressRouteCircuit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermExpressRouteCircuit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/data-sources/express_route_circuit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermExpressRouteCircuit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.peerings">peerings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList">DataAzurermExpressRouteCircuitPeeringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.serviceKey">serviceKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.serviceProviderProperties">serviceProviderProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList">DataAzurermExpressRouteCircuitServiceProviderPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.serviceProviderProvisioningState">serviceProviderProvisioningState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList">DataAzurermExpressRouteCircuitSkuList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference">DataAzurermExpressRouteCircuitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts">DataAzurermExpressRouteCircuitTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `peerings`<sup>Required</sup> <a name="peerings" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.peerings"></a>

```java
public DataAzurermExpressRouteCircuitPeeringsList getPeerings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList">DataAzurermExpressRouteCircuitPeeringsList</a>

---

##### `serviceKey`<sup>Required</sup> <a name="serviceKey" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.serviceKey"></a>

```java
public java.lang.String getServiceKey();
```

- *Type:* java.lang.String

---

##### `serviceProviderProperties`<sup>Required</sup> <a name="serviceProviderProperties" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.serviceProviderProperties"></a>

```java
public DataAzurermExpressRouteCircuitServiceProviderPropertiesList getServiceProviderProperties();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList">DataAzurermExpressRouteCircuitServiceProviderPropertiesList</a>

---

##### `serviceProviderProvisioningState`<sup>Required</sup> <a name="serviceProviderProvisioningState" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.serviceProviderProvisioningState"></a>

```java
public java.lang.String getServiceProviderProvisioningState();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.sku"></a>

```java
public DataAzurermExpressRouteCircuitSkuList getSku();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList">DataAzurermExpressRouteCircuitSkuList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.timeouts"></a>

```java
public DataAzurermExpressRouteCircuitTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference">DataAzurermExpressRouteCircuitTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts">DataAzurermExpressRouteCircuitTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermExpressRouteCircuitConfig <a name="DataAzurermExpressRouteCircuitConfig" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_express_route_circuit.DataAzurermExpressRouteCircuitConfig;

DataAzurermExpressRouteCircuitConfig.builder()
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
//  .timeouts(DataAzurermExpressRouteCircuitTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/data-sources/express_route_circuit#name DataAzurermExpressRouteCircuit#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/data-sources/express_route_circuit#resource_group_name DataAzurermExpressRouteCircuit#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/data-sources/express_route_circuit#id DataAzurermExpressRouteCircuit#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts">DataAzurermExpressRouteCircuitTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/data-sources/express_route_circuit#name DataAzurermExpressRouteCircuit#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/data-sources/express_route_circuit#resource_group_name DataAzurermExpressRouteCircuit#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/data-sources/express_route_circuit#id DataAzurermExpressRouteCircuit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.timeouts"></a>

```java
public DataAzurermExpressRouteCircuitTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts">DataAzurermExpressRouteCircuitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/data-sources/express_route_circuit#timeouts DataAzurermExpressRouteCircuit#timeouts}

---

### DataAzurermExpressRouteCircuitPeerings <a name="DataAzurermExpressRouteCircuitPeerings" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeerings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeerings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_express_route_circuit.DataAzurermExpressRouteCircuitPeerings;

DataAzurermExpressRouteCircuitPeerings.builder()
    .build();
```


### DataAzurermExpressRouteCircuitServiceProviderProperties <a name="DataAzurermExpressRouteCircuitServiceProviderProperties" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_express_route_circuit.DataAzurermExpressRouteCircuitServiceProviderProperties;

DataAzurermExpressRouteCircuitServiceProviderProperties.builder()
    .build();
```


### DataAzurermExpressRouteCircuitSku <a name="DataAzurermExpressRouteCircuitSku" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSku.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_express_route_circuit.DataAzurermExpressRouteCircuitSku;

DataAzurermExpressRouteCircuitSku.builder()
    .build();
```


### DataAzurermExpressRouteCircuitTimeouts <a name="DataAzurermExpressRouteCircuitTimeouts" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_express_route_circuit.DataAzurermExpressRouteCircuitTimeouts;

DataAzurermExpressRouteCircuitTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/data-sources/express_route_circuit#read DataAzurermExpressRouteCircuit#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/data-sources/express_route_circuit#read DataAzurermExpressRouteCircuit#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermExpressRouteCircuitPeeringsList <a name="DataAzurermExpressRouteCircuitPeeringsList" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_express_route_circuit.DataAzurermExpressRouteCircuitPeeringsList;

new DataAzurermExpressRouteCircuitPeeringsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.get"></a>

```java
public DataAzurermExpressRouteCircuitPeeringsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermExpressRouteCircuitPeeringsOutputReference <a name="DataAzurermExpressRouteCircuitPeeringsOutputReference" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_express_route_circuit.DataAzurermExpressRouteCircuitPeeringsOutputReference;

new DataAzurermExpressRouteCircuitPeeringsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.azureAsn">azureAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.peerAsn">peerAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.peeringType">peeringType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.primaryPeerAddressPrefix">primaryPeerAddressPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.secondaryPeerAddressPrefix">secondaryPeerAddressPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.sharedKey">sharedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.vlanId">vlanId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeerings">DataAzurermExpressRouteCircuitPeerings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureAsn`<sup>Required</sup> <a name="azureAsn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.azureAsn"></a>

```java
public java.lang.Number getAzureAsn();
```

- *Type:* java.lang.Number

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.peerAsn"></a>

```java
public java.lang.Number getPeerAsn();
```

- *Type:* java.lang.Number

---

##### `peeringType`<sup>Required</sup> <a name="peeringType" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.peeringType"></a>

```java
public java.lang.String getPeeringType();
```

- *Type:* java.lang.String

---

##### `primaryPeerAddressPrefix`<sup>Required</sup> <a name="primaryPeerAddressPrefix" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.primaryPeerAddressPrefix"></a>

```java
public java.lang.String getPrimaryPeerAddressPrefix();
```

- *Type:* java.lang.String

---

##### `secondaryPeerAddressPrefix`<sup>Required</sup> <a name="secondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.secondaryPeerAddressPrefix"></a>

```java
public java.lang.String getSecondaryPeerAddressPrefix();
```

- *Type:* java.lang.String

---

##### `sharedKey`<sup>Required</sup> <a name="sharedKey" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.sharedKey"></a>

```java
public java.lang.String getSharedKey();
```

- *Type:* java.lang.String

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.vlanId"></a>

```java
public java.lang.Number getVlanId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.internalValue"></a>

```java
public DataAzurermExpressRouteCircuitPeerings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeerings">DataAzurermExpressRouteCircuitPeerings</a>

---


### DataAzurermExpressRouteCircuitServiceProviderPropertiesList <a name="DataAzurermExpressRouteCircuitServiceProviderPropertiesList" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_express_route_circuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList;

new DataAzurermExpressRouteCircuitServiceProviderPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.get"></a>

```java
public DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference <a name="DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_express_route_circuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference;

new DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.bandwidthInMbps">bandwidthInMbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.peeringLocation">peeringLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.serviceProviderName">serviceProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderProperties">DataAzurermExpressRouteCircuitServiceProviderProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bandwidthInMbps`<sup>Required</sup> <a name="bandwidthInMbps" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.bandwidthInMbps"></a>

```java
public java.lang.Number getBandwidthInMbps();
```

- *Type:* java.lang.Number

---

##### `peeringLocation`<sup>Required</sup> <a name="peeringLocation" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.peeringLocation"></a>

```java
public java.lang.String getPeeringLocation();
```

- *Type:* java.lang.String

---

##### `serviceProviderName`<sup>Required</sup> <a name="serviceProviderName" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.serviceProviderName"></a>

```java
public java.lang.String getServiceProviderName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.internalValue"></a>

```java
public DataAzurermExpressRouteCircuitServiceProviderProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderProperties">DataAzurermExpressRouteCircuitServiceProviderProperties</a>

---


### DataAzurermExpressRouteCircuitSkuList <a name="DataAzurermExpressRouteCircuitSkuList" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_express_route_circuit.DataAzurermExpressRouteCircuitSkuList;

new DataAzurermExpressRouteCircuitSkuList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.get"></a>

```java
public DataAzurermExpressRouteCircuitSkuOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermExpressRouteCircuitSkuOutputReference <a name="DataAzurermExpressRouteCircuitSkuOutputReference" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_express_route_circuit.DataAzurermExpressRouteCircuitSkuOutputReference;

new DataAzurermExpressRouteCircuitSkuOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.family">family</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSku">DataAzurermExpressRouteCircuitSku</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.internalValue"></a>

```java
public DataAzurermExpressRouteCircuitSku getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSku">DataAzurermExpressRouteCircuitSku</a>

---


### DataAzurermExpressRouteCircuitTimeoutsOutputReference <a name="DataAzurermExpressRouteCircuitTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_express_route_circuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference;

new DataAzurermExpressRouteCircuitTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts">DataAzurermExpressRouteCircuitTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts">DataAzurermExpressRouteCircuitTimeouts</a>

---



