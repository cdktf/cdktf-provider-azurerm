# `sqlManagedInstanceFailoverGroup` Submodule <a name="`sqlManagedInstanceFailoverGroup` Submodule" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlManagedInstanceFailoverGroup <a name="SqlManagedInstanceFailoverGroup" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group azurerm_sql_managed_instance_failover_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_failover_group.SqlManagedInstanceFailoverGroup;

SqlManagedInstanceFailoverGroup.Builder.create(Construct scope, java.lang.String id)
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
    .managedInstanceName(java.lang.String)
    .name(java.lang.String)
    .partnerManagedInstanceId(java.lang.String)
    .readWriteEndpointFailoverPolicy(SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .readonlyEndpointFailoverPolicyEnabled(java.lang.Boolean)
//  .readonlyEndpointFailoverPolicyEnabled(IResolvable)
//  .timeouts(SqlManagedInstanceFailoverGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#location SqlManagedInstanceFailoverGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.managedInstanceName">managedInstanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#managed_instance_name SqlManagedInstanceFailoverGroup#managed_instance_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#name SqlManagedInstanceFailoverGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.partnerManagedInstanceId">partnerManagedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#partner_managed_instance_id SqlManagedInstanceFailoverGroup#partner_managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.readWriteEndpointFailoverPolicy">readWriteEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | read_write_endpoint_failover_policy block. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#resource_group_name SqlManagedInstanceFailoverGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#id SqlManagedInstanceFailoverGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.readonlyEndpointFailoverPolicyEnabled">readonlyEndpointFailoverPolicyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#readonly_endpoint_failover_policy_enabled SqlManagedInstanceFailoverGroup#readonly_endpoint_failover_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts">SqlManagedInstanceFailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#location SqlManagedInstanceFailoverGroup#location}.

---

##### `managedInstanceName`<sup>Required</sup> <a name="managedInstanceName" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.managedInstanceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#managed_instance_name SqlManagedInstanceFailoverGroup#managed_instance_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#name SqlManagedInstanceFailoverGroup#name}.

---

##### `partnerManagedInstanceId`<sup>Required</sup> <a name="partnerManagedInstanceId" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.partnerManagedInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#partner_managed_instance_id SqlManagedInstanceFailoverGroup#partner_managed_instance_id}.

---

##### `readWriteEndpointFailoverPolicy`<sup>Required</sup> <a name="readWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.readWriteEndpointFailoverPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

read_write_endpoint_failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#read_write_endpoint_failover_policy SqlManagedInstanceFailoverGroup#read_write_endpoint_failover_policy}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#resource_group_name SqlManagedInstanceFailoverGroup#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#id SqlManagedInstanceFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `readonlyEndpointFailoverPolicyEnabled`<sup>Optional</sup> <a name="readonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.readonlyEndpointFailoverPolicyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#readonly_endpoint_failover_policy_enabled SqlManagedInstanceFailoverGroup#readonly_endpoint_failover_policy_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts">SqlManagedInstanceFailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#timeouts SqlManagedInstanceFailoverGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.putReadWriteEndpointFailoverPolicy">putReadWriteEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.resetReadonlyEndpointFailoverPolicyEnabled">resetReadonlyEndpointFailoverPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReadWriteEndpointFailoverPolicy` <a name="putReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.putReadWriteEndpointFailoverPolicy"></a>

```java
public void putReadWriteEndpointFailoverPolicy(SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.putReadWriteEndpointFailoverPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.putTimeouts"></a>

```java
public void putTimeouts(SqlManagedInstanceFailoverGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts">SqlManagedInstanceFailoverGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.resetId"></a>

```java
public void resetId()
```

##### `resetReadonlyEndpointFailoverPolicyEnabled` <a name="resetReadonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.resetReadonlyEndpointFailoverPolicyEnabled"></a>

```java
public void resetReadonlyEndpointFailoverPolicyEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqlManagedInstanceFailoverGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_failover_group.SqlManagedInstanceFailoverGroup;

SqlManagedInstanceFailoverGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_failover_group.SqlManagedInstanceFailoverGroup;

SqlManagedInstanceFailoverGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_failover_group.SqlManagedInstanceFailoverGroup;

SqlManagedInstanceFailoverGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_failover_group.SqlManagedInstanceFailoverGroup;

SqlManagedInstanceFailoverGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SqlManagedInstanceFailoverGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SqlManagedInstanceFailoverGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SqlManagedInstanceFailoverGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SqlManagedInstanceFailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SqlManagedInstanceFailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.partnerRegion">partnerRegion</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList">SqlManagedInstanceFailoverGroupPartnerRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicy">readWriteEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference">SqlManagedInstanceFailoverGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.managedInstanceNameInput">managedInstanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.partnerManagedInstanceIdInput">partnerManagedInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabledInput">readonlyEndpointFailoverPolicyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicyInput">readWriteEndpointFailoverPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts">SqlManagedInstanceFailoverGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.managedInstanceName">managedInstanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.partnerManagedInstanceId">partnerManagedInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled">readonlyEndpointFailoverPolicyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `partnerRegion`<sup>Required</sup> <a name="partnerRegion" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.partnerRegion"></a>

```java
public SqlManagedInstanceFailoverGroupPartnerRegionList getPartnerRegion();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList">SqlManagedInstanceFailoverGroupPartnerRegionList</a>

---

##### `readWriteEndpointFailoverPolicy`<sup>Required</sup> <a name="readWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicy"></a>

```java
public SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference getReadWriteEndpointFailoverPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.timeouts"></a>

```java
public SqlManagedInstanceFailoverGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference">SqlManagedInstanceFailoverGroupTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `managedInstanceNameInput`<sup>Optional</sup> <a name="managedInstanceNameInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.managedInstanceNameInput"></a>

```java
public java.lang.String getManagedInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `partnerManagedInstanceIdInput`<sup>Optional</sup> <a name="partnerManagedInstanceIdInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.partnerManagedInstanceIdInput"></a>

```java
public java.lang.String getPartnerManagedInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `readonlyEndpointFailoverPolicyEnabledInput`<sup>Optional</sup> <a name="readonlyEndpointFailoverPolicyEnabledInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabledInput"></a>

```java
public java.lang.Object getReadonlyEndpointFailoverPolicyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readWriteEndpointFailoverPolicyInput`<sup>Optional</sup> <a name="readWriteEndpointFailoverPolicyInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicyInput"></a>

```java
public SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy getReadWriteEndpointFailoverPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts">SqlManagedInstanceFailoverGroupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `managedInstanceName`<sup>Required</sup> <a name="managedInstanceName" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.managedInstanceName"></a>

```java
public java.lang.String getManagedInstanceName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partnerManagedInstanceId`<sup>Required</sup> <a name="partnerManagedInstanceId" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.partnerManagedInstanceId"></a>

```java
public java.lang.String getPartnerManagedInstanceId();
```

- *Type:* java.lang.String

---

##### `readonlyEndpointFailoverPolicyEnabled`<sup>Required</sup> <a name="readonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled"></a>

```java
public java.lang.Object getReadonlyEndpointFailoverPolicyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SqlManagedInstanceFailoverGroupConfig <a name="SqlManagedInstanceFailoverGroupConfig" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_failover_group.SqlManagedInstanceFailoverGroupConfig;

SqlManagedInstanceFailoverGroupConfig.builder()
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
    .managedInstanceName(java.lang.String)
    .name(java.lang.String)
    .partnerManagedInstanceId(java.lang.String)
    .readWriteEndpointFailoverPolicy(SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .readonlyEndpointFailoverPolicyEnabled(java.lang.Boolean)
//  .readonlyEndpointFailoverPolicyEnabled(IResolvable)
//  .timeouts(SqlManagedInstanceFailoverGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#location SqlManagedInstanceFailoverGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.managedInstanceName">managedInstanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#managed_instance_name SqlManagedInstanceFailoverGroup#managed_instance_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#name SqlManagedInstanceFailoverGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.partnerManagedInstanceId">partnerManagedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#partner_managed_instance_id SqlManagedInstanceFailoverGroup#partner_managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.readWriteEndpointFailoverPolicy">readWriteEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | read_write_endpoint_failover_policy block. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#resource_group_name SqlManagedInstanceFailoverGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#id SqlManagedInstanceFailoverGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.readonlyEndpointFailoverPolicyEnabled">readonlyEndpointFailoverPolicyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#readonly_endpoint_failover_policy_enabled SqlManagedInstanceFailoverGroup#readonly_endpoint_failover_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts">SqlManagedInstanceFailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#location SqlManagedInstanceFailoverGroup#location}.

---

##### `managedInstanceName`<sup>Required</sup> <a name="managedInstanceName" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.managedInstanceName"></a>

```java
public java.lang.String getManagedInstanceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#managed_instance_name SqlManagedInstanceFailoverGroup#managed_instance_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#name SqlManagedInstanceFailoverGroup#name}.

---

##### `partnerManagedInstanceId`<sup>Required</sup> <a name="partnerManagedInstanceId" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.partnerManagedInstanceId"></a>

```java
public java.lang.String getPartnerManagedInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#partner_managed_instance_id SqlManagedInstanceFailoverGroup#partner_managed_instance_id}.

---

##### `readWriteEndpointFailoverPolicy`<sup>Required</sup> <a name="readWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.readWriteEndpointFailoverPolicy"></a>

```java
public SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy getReadWriteEndpointFailoverPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

read_write_endpoint_failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#read_write_endpoint_failover_policy SqlManagedInstanceFailoverGroup#read_write_endpoint_failover_policy}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#resource_group_name SqlManagedInstanceFailoverGroup#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#id SqlManagedInstanceFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `readonlyEndpointFailoverPolicyEnabled`<sup>Optional</sup> <a name="readonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.readonlyEndpointFailoverPolicyEnabled"></a>

```java
public java.lang.Object getReadonlyEndpointFailoverPolicyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#readonly_endpoint_failover_policy_enabled SqlManagedInstanceFailoverGroup#readonly_endpoint_failover_policy_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupConfig.property.timeouts"></a>

```java
public SqlManagedInstanceFailoverGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts">SqlManagedInstanceFailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#timeouts SqlManagedInstanceFailoverGroup#timeouts}

---

### SqlManagedInstanceFailoverGroupPartnerRegion <a name="SqlManagedInstanceFailoverGroupPartnerRegion" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_failover_group.SqlManagedInstanceFailoverGroupPartnerRegion;

SqlManagedInstanceFailoverGroupPartnerRegion.builder()
    .build();
```


### SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy <a name="SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_failover_group.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy;

SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.builder()
    .mode(java.lang.String)
//  .graceMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#mode SqlManagedInstanceFailoverGroup#mode}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes">graceMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#grace_minutes SqlManagedInstanceFailoverGroup#grace_minutes}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#mode SqlManagedInstanceFailoverGroup#mode}.

---

##### `graceMinutes`<sup>Optional</sup> <a name="graceMinutes" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes"></a>

```java
public java.lang.Number getGraceMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#grace_minutes SqlManagedInstanceFailoverGroup#grace_minutes}.

---

### SqlManagedInstanceFailoverGroupTimeouts <a name="SqlManagedInstanceFailoverGroupTimeouts" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_failover_group.SqlManagedInstanceFailoverGroupTimeouts;

SqlManagedInstanceFailoverGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#create SqlManagedInstanceFailoverGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#delete SqlManagedInstanceFailoverGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#read SqlManagedInstanceFailoverGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#update SqlManagedInstanceFailoverGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#create SqlManagedInstanceFailoverGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#delete SqlManagedInstanceFailoverGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#read SqlManagedInstanceFailoverGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/sql_managed_instance_failover_group#update SqlManagedInstanceFailoverGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlManagedInstanceFailoverGroupPartnerRegionList <a name="SqlManagedInstanceFailoverGroupPartnerRegionList" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_failover_group.SqlManagedInstanceFailoverGroupPartnerRegionList;

new SqlManagedInstanceFailoverGroupPartnerRegionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.get"></a>

```java
public SqlManagedInstanceFailoverGroupPartnerRegionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SqlManagedInstanceFailoverGroupPartnerRegionOutputReference <a name="SqlManagedInstanceFailoverGroupPartnerRegionOutputReference" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_failover_group.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference;

new SqlManagedInstanceFailoverGroupPartnerRegionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegion">SqlManagedInstanceFailoverGroupPartnerRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.internalValue"></a>

```java
public SqlManagedInstanceFailoverGroupPartnerRegion getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupPartnerRegion">SqlManagedInstanceFailoverGroupPartnerRegion</a>

---


### SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference <a name="SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_failover_group.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference;

new SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes">resetGraceMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGraceMinutes` <a name="resetGraceMinutes" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes"></a>

```java
public void resetGraceMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput">graceMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes">graceMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `graceMinutesInput`<sup>Optional</sup> <a name="graceMinutesInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput"></a>

```java
public java.lang.Number getGraceMinutesInput();
```

- *Type:* java.lang.Number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `graceMinutes`<sup>Required</sup> <a name="graceMinutes" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes"></a>

```java
public java.lang.Number getGraceMinutes();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue"></a>

```java
public SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

---


### SqlManagedInstanceFailoverGroupTimeoutsOutputReference <a name="SqlManagedInstanceFailoverGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_managed_instance_failover_group.SqlManagedInstanceFailoverGroupTimeoutsOutputReference;

new SqlManagedInstanceFailoverGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts">SqlManagedInstanceFailoverGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sqlManagedInstanceFailoverGroup.SqlManagedInstanceFailoverGroupTimeouts">SqlManagedInstanceFailoverGroupTimeouts</a>

---



