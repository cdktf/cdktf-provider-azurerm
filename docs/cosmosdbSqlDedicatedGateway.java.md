# `cosmosdbSqlDedicatedGateway` Submodule <a name="`cosmosdbSqlDedicatedGateway` Submodule" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbSqlDedicatedGateway <a name="CosmosdbSqlDedicatedGateway" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway azurerm_cosmosdb_sql_dedicated_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_dedicated_gateway.CosmosdbSqlDedicatedGateway;

CosmosdbSqlDedicatedGateway.Builder.create(Construct scope, java.lang.String id)
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
    .cosmosdbAccountId(java.lang.String)
    .instanceCount(java.lang.Number)
    .instanceSize(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CosmosdbSqlDedicatedGatewayTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.cosmosdbAccountId">cosmosdbAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#cosmosdb_account_id CosmosdbSqlDedicatedGateway#cosmosdb_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#instance_count CosmosdbSqlDedicatedGateway#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.instanceSize">instanceSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#instance_size CosmosdbSqlDedicatedGateway#instance_size}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#id CosmosdbSqlDedicatedGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeouts">CosmosdbSqlDedicatedGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cosmosdbAccountId`<sup>Required</sup> <a name="cosmosdbAccountId" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.cosmosdbAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#cosmosdb_account_id CosmosdbSqlDedicatedGateway#cosmosdb_account_id}.

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.instanceCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#instance_count CosmosdbSqlDedicatedGateway#instance_count}.

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.instanceSize"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#instance_size CosmosdbSqlDedicatedGateway#instance_size}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#id CosmosdbSqlDedicatedGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeouts">CosmosdbSqlDedicatedGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#timeouts CosmosdbSqlDedicatedGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.putTimeouts"></a>

```java
public void putTimeouts(CosmosdbSqlDedicatedGatewayTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeouts">CosmosdbSqlDedicatedGatewayTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CosmosdbSqlDedicatedGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_dedicated_gateway.CosmosdbSqlDedicatedGateway;

CosmosdbSqlDedicatedGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_dedicated_gateway.CosmosdbSqlDedicatedGateway;

CosmosdbSqlDedicatedGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_dedicated_gateway.CosmosdbSqlDedicatedGateway;

CosmosdbSqlDedicatedGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_dedicated_gateway.CosmosdbSqlDedicatedGateway;

CosmosdbSqlDedicatedGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CosmosdbSqlDedicatedGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CosmosdbSqlDedicatedGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CosmosdbSqlDedicatedGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CosmosdbSqlDedicatedGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbSqlDedicatedGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference">CosmosdbSqlDedicatedGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.cosmosdbAccountIdInput">cosmosdbAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.instanceSizeInput">instanceSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeouts">CosmosdbSqlDedicatedGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.cosmosdbAccountId">cosmosdbAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.instanceSize">instanceSize</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.timeouts"></a>

```java
public CosmosdbSqlDedicatedGatewayTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference">CosmosdbSqlDedicatedGatewayTimeoutsOutputReference</a>

---

##### `cosmosdbAccountIdInput`<sup>Optional</sup> <a name="cosmosdbAccountIdInput" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.cosmosdbAccountIdInput"></a>

```java
public java.lang.String getCosmosdbAccountIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `instanceSizeInput`<sup>Optional</sup> <a name="instanceSizeInput" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.instanceSizeInput"></a>

```java
public java.lang.String getInstanceSizeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeouts">CosmosdbSqlDedicatedGatewayTimeouts</a>

---

##### `cosmosdbAccountId`<sup>Required</sup> <a name="cosmosdbAccountId" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.cosmosdbAccountId"></a>

```java
public java.lang.String getCosmosdbAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.instanceSize"></a>

```java
public java.lang.String getInstanceSize();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbSqlDedicatedGatewayConfig <a name="CosmosdbSqlDedicatedGatewayConfig" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_dedicated_gateway.CosmosdbSqlDedicatedGatewayConfig;

CosmosdbSqlDedicatedGatewayConfig.builder()
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
    .cosmosdbAccountId(java.lang.String)
    .instanceCount(java.lang.Number)
    .instanceSize(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CosmosdbSqlDedicatedGatewayTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.cosmosdbAccountId">cosmosdbAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#cosmosdb_account_id CosmosdbSqlDedicatedGateway#cosmosdb_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#instance_count CosmosdbSqlDedicatedGateway#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.instanceSize">instanceSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#instance_size CosmosdbSqlDedicatedGateway#instance_size}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#id CosmosdbSqlDedicatedGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeouts">CosmosdbSqlDedicatedGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cosmosdbAccountId`<sup>Required</sup> <a name="cosmosdbAccountId" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.cosmosdbAccountId"></a>

```java
public java.lang.String getCosmosdbAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#cosmosdb_account_id CosmosdbSqlDedicatedGateway#cosmosdb_account_id}.

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#instance_count CosmosdbSqlDedicatedGateway#instance_count}.

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.instanceSize"></a>

```java
public java.lang.String getInstanceSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#instance_size CosmosdbSqlDedicatedGateway#instance_size}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#id CosmosdbSqlDedicatedGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayConfig.property.timeouts"></a>

```java
public CosmosdbSqlDedicatedGatewayTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeouts">CosmosdbSqlDedicatedGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#timeouts CosmosdbSqlDedicatedGateway#timeouts}

---

### CosmosdbSqlDedicatedGatewayTimeouts <a name="CosmosdbSqlDedicatedGatewayTimeouts" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_dedicated_gateway.CosmosdbSqlDedicatedGatewayTimeouts;

CosmosdbSqlDedicatedGatewayTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#create CosmosdbSqlDedicatedGateway#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#delete CosmosdbSqlDedicatedGateway#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#read CosmosdbSqlDedicatedGateway#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#update CosmosdbSqlDedicatedGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#create CosmosdbSqlDedicatedGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#delete CosmosdbSqlDedicatedGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#read CosmosdbSqlDedicatedGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/cosmosdb_sql_dedicated_gateway#update CosmosdbSqlDedicatedGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbSqlDedicatedGatewayTimeoutsOutputReference <a name="CosmosdbSqlDedicatedGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_dedicated_gateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference;

new CosmosdbSqlDedicatedGatewayTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeouts">CosmosdbSqlDedicatedGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlDedicatedGateway.CosmosdbSqlDedicatedGatewayTimeouts">CosmosdbSqlDedicatedGatewayTimeouts</a>

---



