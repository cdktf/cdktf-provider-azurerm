# `mssqlManagedInstanceFailoverGroup` Submodule <a name="`mssqlManagedInstanceFailoverGroup` Submodule" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlManagedInstanceFailoverGroup <a name="MssqlManagedInstanceFailoverGroup" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group azurerm_mssql_managed_instance_failover_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_failover_group.MssqlManagedInstanceFailoverGroup;

MssqlManagedInstanceFailoverGroup.Builder.create(Construct scope, java.lang.String id)
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
    .managedInstanceId(java.lang.String)
    .name(java.lang.String)
    .partnerManagedInstanceId(java.lang.String)
    .readWriteEndpointFailoverPolicy(MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy)
//  .id(java.lang.String)
//  .readonlyEndpointFailoverPolicyEnabled(java.lang.Boolean)
//  .readonlyEndpointFailoverPolicyEnabled(IResolvable)
//  .secondaryType(java.lang.String)
//  .timeouts(MssqlManagedInstanceFailoverGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#location MssqlManagedInstanceFailoverGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#managed_instance_id MssqlManagedInstanceFailoverGroup#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#name MssqlManagedInstanceFailoverGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.partnerManagedInstanceId">partnerManagedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#partner_managed_instance_id MssqlManagedInstanceFailoverGroup#partner_managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.readWriteEndpointFailoverPolicy">readWriteEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | read_write_endpoint_failover_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#id MssqlManagedInstanceFailoverGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.readonlyEndpointFailoverPolicyEnabled">readonlyEndpointFailoverPolicyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#readonly_endpoint_failover_policy_enabled MssqlManagedInstanceFailoverGroup#readonly_endpoint_failover_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.secondaryType">secondaryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#secondary_type MssqlManagedInstanceFailoverGroup#secondary_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#location MssqlManagedInstanceFailoverGroup#location}.

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.managedInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#managed_instance_id MssqlManagedInstanceFailoverGroup#managed_instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#name MssqlManagedInstanceFailoverGroup#name}.

---

##### `partnerManagedInstanceId`<sup>Required</sup> <a name="partnerManagedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.partnerManagedInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#partner_managed_instance_id MssqlManagedInstanceFailoverGroup#partner_managed_instance_id}.

---

##### `readWriteEndpointFailoverPolicy`<sup>Required</sup> <a name="readWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.readWriteEndpointFailoverPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

read_write_endpoint_failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#read_write_endpoint_failover_policy MssqlManagedInstanceFailoverGroup#read_write_endpoint_failover_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#id MssqlManagedInstanceFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `readonlyEndpointFailoverPolicyEnabled`<sup>Optional</sup> <a name="readonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.readonlyEndpointFailoverPolicyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#readonly_endpoint_failover_policy_enabled MssqlManagedInstanceFailoverGroup#readonly_endpoint_failover_policy_enabled}.

---

##### `secondaryType`<sup>Optional</sup> <a name="secondaryType" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.secondaryType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#secondary_type MssqlManagedInstanceFailoverGroup#secondary_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#timeouts MssqlManagedInstanceFailoverGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putReadWriteEndpointFailoverPolicy">putReadWriteEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetReadonlyEndpointFailoverPolicyEnabled">resetReadonlyEndpointFailoverPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetSecondaryType">resetSecondaryType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReadWriteEndpointFailoverPolicy` <a name="putReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putReadWriteEndpointFailoverPolicy"></a>

```java
public void putReadWriteEndpointFailoverPolicy(MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putReadWriteEndpointFailoverPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putTimeouts"></a>

```java
public void putTimeouts(MssqlManagedInstanceFailoverGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetId"></a>

```java
public void resetId()
```

##### `resetReadonlyEndpointFailoverPolicyEnabled` <a name="resetReadonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetReadonlyEndpointFailoverPolicyEnabled"></a>

```java
public void resetReadonlyEndpointFailoverPolicyEnabled()
```

##### `resetSecondaryType` <a name="resetSecondaryType" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetSecondaryType"></a>

```java
public void resetSecondaryType()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlManagedInstanceFailoverGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_failover_group.MssqlManagedInstanceFailoverGroup;

MssqlManagedInstanceFailoverGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_failover_group.MssqlManagedInstanceFailoverGroup;

MssqlManagedInstanceFailoverGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_failover_group.MssqlManagedInstanceFailoverGroup;

MssqlManagedInstanceFailoverGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_failover_group.MssqlManagedInstanceFailoverGroup;

MssqlManagedInstanceFailoverGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MssqlManagedInstanceFailoverGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MssqlManagedInstanceFailoverGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MssqlManagedInstanceFailoverGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MssqlManagedInstanceFailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MssqlManagedInstanceFailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerRegion">partnerRegion</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList">MssqlManagedInstanceFailoverGroupPartnerRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicy">readWriteEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference">MssqlManagedInstanceFailoverGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerManagedInstanceIdInput">partnerManagedInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabledInput">readonlyEndpointFailoverPolicyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicyInput">readWriteEndpointFailoverPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.secondaryTypeInput">secondaryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerManagedInstanceId">partnerManagedInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled">readonlyEndpointFailoverPolicyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.secondaryType">secondaryType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `partnerRegion`<sup>Required</sup> <a name="partnerRegion" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerRegion"></a>

```java
public MssqlManagedInstanceFailoverGroupPartnerRegionList getPartnerRegion();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList">MssqlManagedInstanceFailoverGroupPartnerRegionList</a>

---

##### `readWriteEndpointFailoverPolicy`<sup>Required</sup> <a name="readWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicy"></a>

```java
public MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference getReadWriteEndpointFailoverPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.timeouts"></a>

```java
public MssqlManagedInstanceFailoverGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference">MssqlManagedInstanceFailoverGroupTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.managedInstanceIdInput"></a>

```java
public java.lang.String getManagedInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `partnerManagedInstanceIdInput`<sup>Optional</sup> <a name="partnerManagedInstanceIdInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerManagedInstanceIdInput"></a>

```java
public java.lang.String getPartnerManagedInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `readonlyEndpointFailoverPolicyEnabledInput`<sup>Optional</sup> <a name="readonlyEndpointFailoverPolicyEnabledInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabledInput"></a>

```java
public java.lang.Object getReadonlyEndpointFailoverPolicyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readWriteEndpointFailoverPolicyInput`<sup>Optional</sup> <a name="readWriteEndpointFailoverPolicyInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicyInput"></a>

```java
public MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy getReadWriteEndpointFailoverPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

---

##### `secondaryTypeInput`<sup>Optional</sup> <a name="secondaryTypeInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.secondaryTypeInput"></a>

```java
public java.lang.String getSecondaryTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partnerManagedInstanceId`<sup>Required</sup> <a name="partnerManagedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerManagedInstanceId"></a>

```java
public java.lang.String getPartnerManagedInstanceId();
```

- *Type:* java.lang.String

---

##### `readonlyEndpointFailoverPolicyEnabled`<sup>Required</sup> <a name="readonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled"></a>

```java
public java.lang.Object getReadonlyEndpointFailoverPolicyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secondaryType`<sup>Required</sup> <a name="secondaryType" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.secondaryType"></a>

```java
public java.lang.String getSecondaryType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlManagedInstanceFailoverGroupConfig <a name="MssqlManagedInstanceFailoverGroupConfig" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_failover_group.MssqlManagedInstanceFailoverGroupConfig;

MssqlManagedInstanceFailoverGroupConfig.builder()
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
    .managedInstanceId(java.lang.String)
    .name(java.lang.String)
    .partnerManagedInstanceId(java.lang.String)
    .readWriteEndpointFailoverPolicy(MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy)
//  .id(java.lang.String)
//  .readonlyEndpointFailoverPolicyEnabled(java.lang.Boolean)
//  .readonlyEndpointFailoverPolicyEnabled(IResolvable)
//  .secondaryType(java.lang.String)
//  .timeouts(MssqlManagedInstanceFailoverGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#location MssqlManagedInstanceFailoverGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#managed_instance_id MssqlManagedInstanceFailoverGroup#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#name MssqlManagedInstanceFailoverGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.partnerManagedInstanceId">partnerManagedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#partner_managed_instance_id MssqlManagedInstanceFailoverGroup#partner_managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.readWriteEndpointFailoverPolicy">readWriteEndpointFailoverPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | read_write_endpoint_failover_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#id MssqlManagedInstanceFailoverGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.readonlyEndpointFailoverPolicyEnabled">readonlyEndpointFailoverPolicyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#readonly_endpoint_failover_policy_enabled MssqlManagedInstanceFailoverGroup#readonly_endpoint_failover_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.secondaryType">secondaryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#secondary_type MssqlManagedInstanceFailoverGroup#secondary_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#location MssqlManagedInstanceFailoverGroup#location}.

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#managed_instance_id MssqlManagedInstanceFailoverGroup#managed_instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#name MssqlManagedInstanceFailoverGroup#name}.

---

##### `partnerManagedInstanceId`<sup>Required</sup> <a name="partnerManagedInstanceId" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.partnerManagedInstanceId"></a>

```java
public java.lang.String getPartnerManagedInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#partner_managed_instance_id MssqlManagedInstanceFailoverGroup#partner_managed_instance_id}.

---

##### `readWriteEndpointFailoverPolicy`<sup>Required</sup> <a name="readWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.readWriteEndpointFailoverPolicy"></a>

```java
public MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy getReadWriteEndpointFailoverPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

read_write_endpoint_failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#read_write_endpoint_failover_policy MssqlManagedInstanceFailoverGroup#read_write_endpoint_failover_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#id MssqlManagedInstanceFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `readonlyEndpointFailoverPolicyEnabled`<sup>Optional</sup> <a name="readonlyEndpointFailoverPolicyEnabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.readonlyEndpointFailoverPolicyEnabled"></a>

```java
public java.lang.Object getReadonlyEndpointFailoverPolicyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#readonly_endpoint_failover_policy_enabled MssqlManagedInstanceFailoverGroup#readonly_endpoint_failover_policy_enabled}.

---

##### `secondaryType`<sup>Optional</sup> <a name="secondaryType" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.secondaryType"></a>

```java
public java.lang.String getSecondaryType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#secondary_type MssqlManagedInstanceFailoverGroup#secondary_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.timeouts"></a>

```java
public MssqlManagedInstanceFailoverGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#timeouts MssqlManagedInstanceFailoverGroup#timeouts}

---

### MssqlManagedInstanceFailoverGroupPartnerRegion <a name="MssqlManagedInstanceFailoverGroupPartnerRegion" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_failover_group.MssqlManagedInstanceFailoverGroupPartnerRegion;

MssqlManagedInstanceFailoverGroupPartnerRegion.builder()
    .build();
```


### MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy <a name="MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_failover_group.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy;

MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.builder()
    .mode(java.lang.String)
//  .graceMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#mode MssqlManagedInstanceFailoverGroup#mode}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes">graceMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#grace_minutes MssqlManagedInstanceFailoverGroup#grace_minutes}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#mode MssqlManagedInstanceFailoverGroup#mode}.

---

##### `graceMinutes`<sup>Optional</sup> <a name="graceMinutes" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes"></a>

```java
public java.lang.Number getGraceMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#grace_minutes MssqlManagedInstanceFailoverGroup#grace_minutes}.

---

### MssqlManagedInstanceFailoverGroupTimeouts <a name="MssqlManagedInstanceFailoverGroupTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_failover_group.MssqlManagedInstanceFailoverGroupTimeouts;

MssqlManagedInstanceFailoverGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#create MssqlManagedInstanceFailoverGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#delete MssqlManagedInstanceFailoverGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#read MssqlManagedInstanceFailoverGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#update MssqlManagedInstanceFailoverGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#create MssqlManagedInstanceFailoverGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#delete MssqlManagedInstanceFailoverGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#read MssqlManagedInstanceFailoverGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/mssql_managed_instance_failover_group#update MssqlManagedInstanceFailoverGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlManagedInstanceFailoverGroupPartnerRegionList <a name="MssqlManagedInstanceFailoverGroupPartnerRegionList" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_failover_group.MssqlManagedInstanceFailoverGroupPartnerRegionList;

new MssqlManagedInstanceFailoverGroupPartnerRegionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.get"></a>

```java
public MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference <a name="MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_failover_group.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference;

new MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegion">MssqlManagedInstanceFailoverGroupPartnerRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.internalValue"></a>

```java
public MssqlManagedInstanceFailoverGroupPartnerRegion getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegion">MssqlManagedInstanceFailoverGroupPartnerRegion</a>

---


### MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference <a name="MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_failover_group.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference;

new MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes">resetGraceMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGraceMinutes` <a name="resetGraceMinutes" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes"></a>

```java
public void resetGraceMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput">graceMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes">graceMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `graceMinutesInput`<sup>Optional</sup> <a name="graceMinutesInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput"></a>

```java
public java.lang.Number getGraceMinutesInput();
```

- *Type:* java.lang.Number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `graceMinutes`<sup>Required</sup> <a name="graceMinutes" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes"></a>

```java
public java.lang.Number getGraceMinutes();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue"></a>

```java
public MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

---


### MssqlManagedInstanceFailoverGroupTimeoutsOutputReference <a name="MssqlManagedInstanceFailoverGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_managed_instance_failover_group.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference;

new MssqlManagedInstanceFailoverGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a>

---



