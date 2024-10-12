# `monitorDataCollectionRuleAssociation` Submodule <a name="`monitorDataCollectionRuleAssociation` Submodule" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorDataCollectionRuleAssociation <a name="MonitorDataCollectionRuleAssociation" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association azurerm_monitor_data_collection_rule_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule_association.MonitorDataCollectionRuleAssociation;

MonitorDataCollectionRuleAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .targetResourceId(java.lang.String)
//  .dataCollectionEndpointId(java.lang.String)
//  .dataCollectionRuleId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .timeouts(MonitorDataCollectionRuleAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#target_resource_id MonitorDataCollectionRuleAssociation#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.dataCollectionEndpointId">dataCollectionEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#data_collection_endpoint_id MonitorDataCollectionRuleAssociation#data_collection_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.dataCollectionRuleId">dataCollectionRuleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#data_collection_rule_id MonitorDataCollectionRuleAssociation#data_collection_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#description MonitorDataCollectionRuleAssociation#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#id MonitorDataCollectionRuleAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#name MonitorDataCollectionRuleAssociation#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeouts">MonitorDataCollectionRuleAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.targetResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#target_resource_id MonitorDataCollectionRuleAssociation#target_resource_id}.

---

##### `dataCollectionEndpointId`<sup>Optional</sup> <a name="dataCollectionEndpointId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.dataCollectionEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#data_collection_endpoint_id MonitorDataCollectionRuleAssociation#data_collection_endpoint_id}.

---

##### `dataCollectionRuleId`<sup>Optional</sup> <a name="dataCollectionRuleId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.dataCollectionRuleId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#data_collection_rule_id MonitorDataCollectionRuleAssociation#data_collection_rule_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#description MonitorDataCollectionRuleAssociation#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#id MonitorDataCollectionRuleAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#name MonitorDataCollectionRuleAssociation#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeouts">MonitorDataCollectionRuleAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#timeouts MonitorDataCollectionRuleAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.resetDataCollectionEndpointId">resetDataCollectionEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.resetDataCollectionRuleId">resetDataCollectionRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.putTimeouts"></a>

```java
public void putTimeouts(MonitorDataCollectionRuleAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeouts">MonitorDataCollectionRuleAssociationTimeouts</a>

---

##### `resetDataCollectionEndpointId` <a name="resetDataCollectionEndpointId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.resetDataCollectionEndpointId"></a>

```java
public void resetDataCollectionEndpointId()
```

##### `resetDataCollectionRuleId` <a name="resetDataCollectionRuleId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.resetDataCollectionRuleId"></a>

```java
public void resetDataCollectionRuleId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.resetName"></a>

```java
public void resetName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorDataCollectionRuleAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule_association.MonitorDataCollectionRuleAssociation;

MonitorDataCollectionRuleAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule_association.MonitorDataCollectionRuleAssociation;

MonitorDataCollectionRuleAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule_association.MonitorDataCollectionRuleAssociation;

MonitorDataCollectionRuleAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule_association.MonitorDataCollectionRuleAssociation;

MonitorDataCollectionRuleAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MonitorDataCollectionRuleAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MonitorDataCollectionRuleAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MonitorDataCollectionRuleAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MonitorDataCollectionRuleAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MonitorDataCollectionRuleAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference">MonitorDataCollectionRuleAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.dataCollectionEndpointIdInput">dataCollectionEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.dataCollectionRuleIdInput">dataCollectionRuleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.targetResourceIdInput">targetResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeouts">MonitorDataCollectionRuleAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.dataCollectionEndpointId">dataCollectionEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.dataCollectionRuleId">dataCollectionRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.timeouts"></a>

```java
public MonitorDataCollectionRuleAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference">MonitorDataCollectionRuleAssociationTimeoutsOutputReference</a>

---

##### `dataCollectionEndpointIdInput`<sup>Optional</sup> <a name="dataCollectionEndpointIdInput" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.dataCollectionEndpointIdInput"></a>

```java
public java.lang.String getDataCollectionEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `dataCollectionRuleIdInput`<sup>Optional</sup> <a name="dataCollectionRuleIdInput" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.dataCollectionRuleIdInput"></a>

```java
public java.lang.String getDataCollectionRuleIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `targetResourceIdInput`<sup>Optional</sup> <a name="targetResourceIdInput" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.targetResourceIdInput"></a>

```java
public java.lang.String getTargetResourceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeouts">MonitorDataCollectionRuleAssociationTimeouts</a>

---

##### `dataCollectionEndpointId`<sup>Required</sup> <a name="dataCollectionEndpointId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.dataCollectionEndpointId"></a>

```java
public java.lang.String getDataCollectionEndpointId();
```

- *Type:* java.lang.String

---

##### `dataCollectionRuleId`<sup>Required</sup> <a name="dataCollectionRuleId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.dataCollectionRuleId"></a>

```java
public java.lang.String getDataCollectionRuleId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorDataCollectionRuleAssociationConfig <a name="MonitorDataCollectionRuleAssociationConfig" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule_association.MonitorDataCollectionRuleAssociationConfig;

MonitorDataCollectionRuleAssociationConfig.builder()
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
    .targetResourceId(java.lang.String)
//  .dataCollectionEndpointId(java.lang.String)
//  .dataCollectionRuleId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .timeouts(MonitorDataCollectionRuleAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#target_resource_id MonitorDataCollectionRuleAssociation#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.dataCollectionEndpointId">dataCollectionEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#data_collection_endpoint_id MonitorDataCollectionRuleAssociation#data_collection_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.dataCollectionRuleId">dataCollectionRuleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#data_collection_rule_id MonitorDataCollectionRuleAssociation#data_collection_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#description MonitorDataCollectionRuleAssociation#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#id MonitorDataCollectionRuleAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#name MonitorDataCollectionRuleAssociation#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeouts">MonitorDataCollectionRuleAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#target_resource_id MonitorDataCollectionRuleAssociation#target_resource_id}.

---

##### `dataCollectionEndpointId`<sup>Optional</sup> <a name="dataCollectionEndpointId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.dataCollectionEndpointId"></a>

```java
public java.lang.String getDataCollectionEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#data_collection_endpoint_id MonitorDataCollectionRuleAssociation#data_collection_endpoint_id}.

---

##### `dataCollectionRuleId`<sup>Optional</sup> <a name="dataCollectionRuleId" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.dataCollectionRuleId"></a>

```java
public java.lang.String getDataCollectionRuleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#data_collection_rule_id MonitorDataCollectionRuleAssociation#data_collection_rule_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#description MonitorDataCollectionRuleAssociation#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#id MonitorDataCollectionRuleAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#name MonitorDataCollectionRuleAssociation#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationConfig.property.timeouts"></a>

```java
public MonitorDataCollectionRuleAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeouts">MonitorDataCollectionRuleAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#timeouts MonitorDataCollectionRuleAssociation#timeouts}

---

### MonitorDataCollectionRuleAssociationTimeouts <a name="MonitorDataCollectionRuleAssociationTimeouts" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule_association.MonitorDataCollectionRuleAssociationTimeouts;

MonitorDataCollectionRuleAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#create MonitorDataCollectionRuleAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#delete MonitorDataCollectionRuleAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#read MonitorDataCollectionRuleAssociation#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#update MonitorDataCollectionRuleAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#create MonitorDataCollectionRuleAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#delete MonitorDataCollectionRuleAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#read MonitorDataCollectionRuleAssociation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/monitor_data_collection_rule_association#update MonitorDataCollectionRuleAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorDataCollectionRuleAssociationTimeoutsOutputReference <a name="MonitorDataCollectionRuleAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.monitor_data_collection_rule_association.MonitorDataCollectionRuleAssociationTimeoutsOutputReference;

new MonitorDataCollectionRuleAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeouts">MonitorDataCollectionRuleAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.monitorDataCollectionRuleAssociation.MonitorDataCollectionRuleAssociationTimeouts">MonitorDataCollectionRuleAssociationTimeouts</a>

---



