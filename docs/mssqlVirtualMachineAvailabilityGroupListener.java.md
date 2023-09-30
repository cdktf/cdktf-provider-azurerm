# `azurerm_mssql_virtual_machine_availability_group_listener`

Refer to the Terraform Registory for docs: [`azurerm_mssql_virtual_machine_availability_group_listener`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener).

# `mssqlVirtualMachineAvailabilityGroupListener` Submodule <a name="`mssqlVirtualMachineAvailabilityGroupListener` Submodule" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlVirtualMachineAvailabilityGroupListener <a name="MssqlVirtualMachineAvailabilityGroupListener" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener azurerm_mssql_virtual_machine_availability_group_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_availability_group_listener.MssqlVirtualMachineAvailabilityGroupListener;

MssqlVirtualMachineAvailabilityGroupListener.Builder.create(Construct scope, java.lang.String id)
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
    .replica(IResolvable)
    .replica(java.util.List<MssqlVirtualMachineAvailabilityGroupListenerReplica>)
    .sqlVirtualMachineGroupId(java.lang.String)
//  .availabilityGroupName(java.lang.String)
//  .id(java.lang.String)
//  .loadBalancerConfiguration(MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration)
//  .multiSubnetIpConfiguration(IResolvable)
//  .multiSubnetIpConfiguration(java.util.List<MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration>)
//  .port(java.lang.Number)
//  .timeouts(MssqlVirtualMachineAvailabilityGroupListenerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#name MssqlVirtualMachineAvailabilityGroupListener#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.replica">replica</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a>></code> | replica block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.sqlVirtualMachineGroupId">sqlVirtualMachineGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_group_id MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.availabilityGroupName">availabilityGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#availability_group_name MssqlVirtualMachineAvailabilityGroupListener#availability_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#id MssqlVirtualMachineAvailabilityGroupListener#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.loadBalancerConfiguration">loadBalancerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration</a></code> | load_balancer_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.multiSubnetIpConfiguration">multiSubnetIpConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a>></code> | multi_subnet_ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#port MssqlVirtualMachineAvailabilityGroupListener#port}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts">MssqlVirtualMachineAvailabilityGroupListenerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#name MssqlVirtualMachineAvailabilityGroupListener#name}.

---

##### `replica`<sup>Required</sup> <a name="replica" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.replica"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a>>

replica block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#replica MssqlVirtualMachineAvailabilityGroupListener#replica}

---

##### `sqlVirtualMachineGroupId`<sup>Required</sup> <a name="sqlVirtualMachineGroupId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.sqlVirtualMachineGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_group_id MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_group_id}.

---

##### `availabilityGroupName`<sup>Optional</sup> <a name="availabilityGroupName" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.availabilityGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#availability_group_name MssqlVirtualMachineAvailabilityGroupListener#availability_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#id MssqlVirtualMachineAvailabilityGroupListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancerConfiguration`<sup>Optional</sup> <a name="loadBalancerConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.loadBalancerConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration</a>

load_balancer_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#load_balancer_configuration MssqlVirtualMachineAvailabilityGroupListener#load_balancer_configuration}

---

##### `multiSubnetIpConfiguration`<sup>Optional</sup> <a name="multiSubnetIpConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.multiSubnetIpConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a>>

multi_subnet_ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#multi_subnet_ip_configuration MssqlVirtualMachineAvailabilityGroupListener#multi_subnet_ip_configuration}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#port MssqlVirtualMachineAvailabilityGroupListener#port}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts">MssqlVirtualMachineAvailabilityGroupListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#timeouts MssqlVirtualMachineAvailabilityGroupListener#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putLoadBalancerConfiguration">putLoadBalancerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putMultiSubnetIpConfiguration">putMultiSubnetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putReplica">putReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetAvailabilityGroupName">resetAvailabilityGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetLoadBalancerConfiguration">resetLoadBalancerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetMultiSubnetIpConfiguration">resetMultiSubnetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLoadBalancerConfiguration` <a name="putLoadBalancerConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putLoadBalancerConfiguration"></a>

```java
public void putLoadBalancerConfiguration(MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putLoadBalancerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration</a>

---

##### `putMultiSubnetIpConfiguration` <a name="putMultiSubnetIpConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putMultiSubnetIpConfiguration"></a>

```java
public void putMultiSubnetIpConfiguration(IResolvable OR java.util.List<MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putMultiSubnetIpConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a>>

---

##### `putReplica` <a name="putReplica" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putReplica"></a>

```java
public void putReplica(IResolvable OR java.util.List<MssqlVirtualMachineAvailabilityGroupListenerReplica> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putReplica.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putTimeouts"></a>

```java
public void putTimeouts(MssqlVirtualMachineAvailabilityGroupListenerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts">MssqlVirtualMachineAvailabilityGroupListenerTimeouts</a>

---

##### `resetAvailabilityGroupName` <a name="resetAvailabilityGroupName" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetAvailabilityGroupName"></a>

```java
public void resetAvailabilityGroupName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetId"></a>

```java
public void resetId()
```

##### `resetLoadBalancerConfiguration` <a name="resetLoadBalancerConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetLoadBalancerConfiguration"></a>

```java
public void resetLoadBalancerConfiguration()
```

##### `resetMultiSubnetIpConfiguration` <a name="resetMultiSubnetIpConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetMultiSubnetIpConfiguration"></a>

```java
public void resetMultiSubnetIpConfiguration()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetPort"></a>

```java
public void resetPort()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_availability_group_listener.MssqlVirtualMachineAvailabilityGroupListener;

MssqlVirtualMachineAvailabilityGroupListener.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_availability_group_listener.MssqlVirtualMachineAvailabilityGroupListener;

MssqlVirtualMachineAvailabilityGroupListener.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_availability_group_listener.MssqlVirtualMachineAvailabilityGroupListener;

MssqlVirtualMachineAvailabilityGroupListener.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.loadBalancerConfiguration">loadBalancerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.multiSubnetIpConfiguration">multiSubnetIpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.replica">replica</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList">MssqlVirtualMachineAvailabilityGroupListenerReplicaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference">MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.availabilityGroupNameInput">availabilityGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.loadBalancerConfigurationInput">loadBalancerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.multiSubnetIpConfigurationInput">multiSubnetIpConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.replicaInput">replicaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.sqlVirtualMachineGroupIdInput">sqlVirtualMachineGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts">MssqlVirtualMachineAvailabilityGroupListenerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.availabilityGroupName">availabilityGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.sqlVirtualMachineGroupId">sqlVirtualMachineGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadBalancerConfiguration`<sup>Required</sup> <a name="loadBalancerConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.loadBalancerConfiguration"></a>

```java
public MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference getLoadBalancerConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference</a>

---

##### `multiSubnetIpConfiguration`<sup>Required</sup> <a name="multiSubnetIpConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.multiSubnetIpConfiguration"></a>

```java
public MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList getMultiSubnetIpConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList</a>

---

##### `replica`<sup>Required</sup> <a name="replica" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.replica"></a>

```java
public MssqlVirtualMachineAvailabilityGroupListenerReplicaList getReplica();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList">MssqlVirtualMachineAvailabilityGroupListenerReplicaList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.timeouts"></a>

```java
public MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference">MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference</a>

---

##### `availabilityGroupNameInput`<sup>Optional</sup> <a name="availabilityGroupNameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.availabilityGroupNameInput"></a>

```java
public java.lang.String getAvailabilityGroupNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerConfigurationInput`<sup>Optional</sup> <a name="loadBalancerConfigurationInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.loadBalancerConfigurationInput"></a>

```java
public MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration getLoadBalancerConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration</a>

---

##### `multiSubnetIpConfigurationInput`<sup>Optional</sup> <a name="multiSubnetIpConfigurationInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.multiSubnetIpConfigurationInput"></a>

```java
public java.lang.Object getMultiSubnetIpConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `replicaInput`<sup>Optional</sup> <a name="replicaInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.replicaInput"></a>

```java
public java.lang.Object getReplicaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a>>

---

##### `sqlVirtualMachineGroupIdInput`<sup>Optional</sup> <a name="sqlVirtualMachineGroupIdInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.sqlVirtualMachineGroupIdInput"></a>

```java
public java.lang.String getSqlVirtualMachineGroupIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts">MssqlVirtualMachineAvailabilityGroupListenerTimeouts</a>

---

##### `availabilityGroupName`<sup>Required</sup> <a name="availabilityGroupName" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.availabilityGroupName"></a>

```java
public java.lang.String getAvailabilityGroupName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `sqlVirtualMachineGroupId`<sup>Required</sup> <a name="sqlVirtualMachineGroupId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.sqlVirtualMachineGroupId"></a>

```java
public java.lang.String getSqlVirtualMachineGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListener.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlVirtualMachineAvailabilityGroupListenerConfig <a name="MssqlVirtualMachineAvailabilityGroupListenerConfig" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_availability_group_listener.MssqlVirtualMachineAvailabilityGroupListenerConfig;

MssqlVirtualMachineAvailabilityGroupListenerConfig.builder()
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
    .replica(IResolvable)
    .replica(java.util.List<MssqlVirtualMachineAvailabilityGroupListenerReplica>)
    .sqlVirtualMachineGroupId(java.lang.String)
//  .availabilityGroupName(java.lang.String)
//  .id(java.lang.String)
//  .loadBalancerConfiguration(MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration)
//  .multiSubnetIpConfiguration(IResolvable)
//  .multiSubnetIpConfiguration(java.util.List<MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration>)
//  .port(java.lang.Number)
//  .timeouts(MssqlVirtualMachineAvailabilityGroupListenerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#name MssqlVirtualMachineAvailabilityGroupListener#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.replica">replica</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a>></code> | replica block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.sqlVirtualMachineGroupId">sqlVirtualMachineGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_group_id MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.availabilityGroupName">availabilityGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#availability_group_name MssqlVirtualMachineAvailabilityGroupListener#availability_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#id MssqlVirtualMachineAvailabilityGroupListener#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.loadBalancerConfiguration">loadBalancerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration</a></code> | load_balancer_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.multiSubnetIpConfiguration">multiSubnetIpConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a>></code> | multi_subnet_ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#port MssqlVirtualMachineAvailabilityGroupListener#port}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts">MssqlVirtualMachineAvailabilityGroupListenerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#name MssqlVirtualMachineAvailabilityGroupListener#name}.

---

##### `replica`<sup>Required</sup> <a name="replica" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.replica"></a>

```java
public java.lang.Object getReplica();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a>>

replica block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#replica MssqlVirtualMachineAvailabilityGroupListener#replica}

---

##### `sqlVirtualMachineGroupId`<sup>Required</sup> <a name="sqlVirtualMachineGroupId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.sqlVirtualMachineGroupId"></a>

```java
public java.lang.String getSqlVirtualMachineGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_group_id MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_group_id}.

---

##### `availabilityGroupName`<sup>Optional</sup> <a name="availabilityGroupName" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.availabilityGroupName"></a>

```java
public java.lang.String getAvailabilityGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#availability_group_name MssqlVirtualMachineAvailabilityGroupListener#availability_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#id MssqlVirtualMachineAvailabilityGroupListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancerConfiguration`<sup>Optional</sup> <a name="loadBalancerConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.loadBalancerConfiguration"></a>

```java
public MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration getLoadBalancerConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration</a>

load_balancer_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#load_balancer_configuration MssqlVirtualMachineAvailabilityGroupListener#load_balancer_configuration}

---

##### `multiSubnetIpConfiguration`<sup>Optional</sup> <a name="multiSubnetIpConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.multiSubnetIpConfiguration"></a>

```java
public java.lang.Object getMultiSubnetIpConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a>>

multi_subnet_ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#multi_subnet_ip_configuration MssqlVirtualMachineAvailabilityGroupListener#multi_subnet_ip_configuration}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#port MssqlVirtualMachineAvailabilityGroupListener#port}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerConfig.property.timeouts"></a>

```java
public MssqlVirtualMachineAvailabilityGroupListenerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts">MssqlVirtualMachineAvailabilityGroupListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#timeouts MssqlVirtualMachineAvailabilityGroupListener#timeouts}

---

### MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration <a name="MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_availability_group_listener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration;

MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.builder()
    .loadBalancerId(java.lang.String)
    .privateIpAddress(java.lang.String)
    .probePort(java.lang.Number)
    .sqlVirtualMachineIds(java.util.List<java.lang.String>)
    .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#load_balancer_id MssqlVirtualMachineAvailabilityGroupListener#load_balancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#private_ip_address MssqlVirtualMachineAvailabilityGroupListener#private_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.probePort">probePort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#probe_port MssqlVirtualMachineAvailabilityGroupListener#probe_port}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.sqlVirtualMachineIds">sqlVirtualMachineIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_ids MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_ids}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#subnet_id MssqlVirtualMachineAvailabilityGroupListener#subnet_id}. |

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#load_balancer_id MssqlVirtualMachineAvailabilityGroupListener#load_balancer_id}.

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#private_ip_address MssqlVirtualMachineAvailabilityGroupListener#private_ip_address}.

---

##### `probePort`<sup>Required</sup> <a name="probePort" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.probePort"></a>

```java
public java.lang.Number getProbePort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#probe_port MssqlVirtualMachineAvailabilityGroupListener#probe_port}.

---

##### `sqlVirtualMachineIds`<sup>Required</sup> <a name="sqlVirtualMachineIds" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.sqlVirtualMachineIds"></a>

```java
public java.util.List<java.lang.String> getSqlVirtualMachineIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_ids MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_ids}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#subnet_id MssqlVirtualMachineAvailabilityGroupListener#subnet_id}.

---

### MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration <a name="MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_availability_group_listener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration;

MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration.builder()
    .privateIpAddress(java.lang.String)
    .sqlVirtualMachineId(java.lang.String)
    .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#private_ip_address MssqlVirtualMachineAvailabilityGroupListener#private_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration.property.sqlVirtualMachineId">sqlVirtualMachineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_id MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#subnet_id MssqlVirtualMachineAvailabilityGroupListener#subnet_id}. |

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#private_ip_address MssqlVirtualMachineAvailabilityGroupListener#private_ip_address}.

---

##### `sqlVirtualMachineId`<sup>Required</sup> <a name="sqlVirtualMachineId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration.property.sqlVirtualMachineId"></a>

```java
public java.lang.String getSqlVirtualMachineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_id MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#subnet_id MssqlVirtualMachineAvailabilityGroupListener#subnet_id}.

---

### MssqlVirtualMachineAvailabilityGroupListenerReplica <a name="MssqlVirtualMachineAvailabilityGroupListenerReplica" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_availability_group_listener.MssqlVirtualMachineAvailabilityGroupListenerReplica;

MssqlVirtualMachineAvailabilityGroupListenerReplica.builder()
    .commit(java.lang.String)
    .failoverMode(java.lang.String)
    .readableSecondary(java.lang.String)
    .role(java.lang.String)
    .sqlVirtualMachineId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.commit">commit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#commit MssqlVirtualMachineAvailabilityGroupListener#commit}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.failoverMode">failoverMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#failover_mode MssqlVirtualMachineAvailabilityGroupListener#failover_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.readableSecondary">readableSecondary</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#readable_secondary MssqlVirtualMachineAvailabilityGroupListener#readable_secondary}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#role MssqlVirtualMachineAvailabilityGroupListener#role}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.sqlVirtualMachineId">sqlVirtualMachineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_id MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_id}. |

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.commit"></a>

```java
public java.lang.String getCommit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#commit MssqlVirtualMachineAvailabilityGroupListener#commit}.

---

##### `failoverMode`<sup>Required</sup> <a name="failoverMode" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.failoverMode"></a>

```java
public java.lang.String getFailoverMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#failover_mode MssqlVirtualMachineAvailabilityGroupListener#failover_mode}.

---

##### `readableSecondary`<sup>Required</sup> <a name="readableSecondary" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.readableSecondary"></a>

```java
public java.lang.String getReadableSecondary();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#readable_secondary MssqlVirtualMachineAvailabilityGroupListener#readable_secondary}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#role MssqlVirtualMachineAvailabilityGroupListener#role}.

---

##### `sqlVirtualMachineId`<sup>Required</sup> <a name="sqlVirtualMachineId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica.property.sqlVirtualMachineId"></a>

```java
public java.lang.String getSqlVirtualMachineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_id MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_id}.

---

### MssqlVirtualMachineAvailabilityGroupListenerTimeouts <a name="MssqlVirtualMachineAvailabilityGroupListenerTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_availability_group_listener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts;

MssqlVirtualMachineAvailabilityGroupListenerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#create MssqlVirtualMachineAvailabilityGroupListener#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#delete MssqlVirtualMachineAvailabilityGroupListener#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#read MssqlVirtualMachineAvailabilityGroupListener#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#create MssqlVirtualMachineAvailabilityGroupListener#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#delete MssqlVirtualMachineAvailabilityGroupListener#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/mssql_virtual_machine_availability_group_listener#read MssqlVirtualMachineAvailabilityGroupListener#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference <a name="MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_availability_group_listener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference;

new MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.probePortInput">probePortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.sqlVirtualMachineIdsInput">sqlVirtualMachineIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.probePort">probePort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.sqlVirtualMachineIds">sqlVirtualMachineIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.loadBalancerIdInput"></a>

```java
public java.lang.String getLoadBalancerIdInput();
```

- *Type:* java.lang.String

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.privateIpAddressInput"></a>

```java
public java.lang.String getPrivateIpAddressInput();
```

- *Type:* java.lang.String

---

##### `probePortInput`<sup>Optional</sup> <a name="probePortInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.probePortInput"></a>

```java
public java.lang.Number getProbePortInput();
```

- *Type:* java.lang.Number

---

##### `sqlVirtualMachineIdsInput`<sup>Optional</sup> <a name="sqlVirtualMachineIdsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.sqlVirtualMachineIdsInput"></a>

```java
public java.util.List<java.lang.String> getSqlVirtualMachineIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `probePort`<sup>Required</sup> <a name="probePort" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.probePort"></a>

```java
public java.lang.Number getProbePort();
```

- *Type:* java.lang.Number

---

##### `sqlVirtualMachineIds`<sup>Required</sup> <a name="sqlVirtualMachineIds" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.sqlVirtualMachineIds"></a>

```java
public java.util.List<java.lang.String> getSqlVirtualMachineIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference.property.internalValue"></a>

```java
public MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration">MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration</a>

---


### MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList <a name="MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_availability_group_listener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList;

new MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.get"></a>

```java
public MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a>>

---


### MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference <a name="MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_availability_group_listener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference;

new MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.sqlVirtualMachineIdInput">sqlVirtualMachineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.sqlVirtualMachineId">sqlVirtualMachineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.privateIpAddressInput"></a>

```java
public java.lang.String getPrivateIpAddressInput();
```

- *Type:* java.lang.String

---

##### `sqlVirtualMachineIdInput`<sup>Optional</sup> <a name="sqlVirtualMachineIdInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.sqlVirtualMachineIdInput"></a>

```java
public java.lang.String getSqlVirtualMachineIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `sqlVirtualMachineId`<sup>Required</sup> <a name="sqlVirtualMachineId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.sqlVirtualMachineId"></a>

```java
public java.lang.String getSqlVirtualMachineId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration">MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration</a>

---


### MssqlVirtualMachineAvailabilityGroupListenerReplicaList <a name="MssqlVirtualMachineAvailabilityGroupListenerReplicaList" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_availability_group_listener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList;

new MssqlVirtualMachineAvailabilityGroupListenerReplicaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.get"></a>

```java
public MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a>>

---


### MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference <a name="MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_availability_group_listener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference;

new MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.commitInput">commitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.failoverModeInput">failoverModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.readableSecondaryInput">readableSecondaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.sqlVirtualMachineIdInput">sqlVirtualMachineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.commit">commit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.failoverMode">failoverMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.readableSecondary">readableSecondary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.sqlVirtualMachineId">sqlVirtualMachineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.commitInput"></a>

```java
public java.lang.String getCommitInput();
```

- *Type:* java.lang.String

---

##### `failoverModeInput`<sup>Optional</sup> <a name="failoverModeInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.failoverModeInput"></a>

```java
public java.lang.String getFailoverModeInput();
```

- *Type:* java.lang.String

---

##### `readableSecondaryInput`<sup>Optional</sup> <a name="readableSecondaryInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.readableSecondaryInput"></a>

```java
public java.lang.String getReadableSecondaryInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `sqlVirtualMachineIdInput`<sup>Optional</sup> <a name="sqlVirtualMachineIdInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.sqlVirtualMachineIdInput"></a>

```java
public java.lang.String getSqlVirtualMachineIdInput();
```

- *Type:* java.lang.String

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.commit"></a>

```java
public java.lang.String getCommit();
```

- *Type:* java.lang.String

---

##### `failoverMode`<sup>Required</sup> <a name="failoverMode" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.failoverMode"></a>

```java
public java.lang.String getFailoverMode();
```

- *Type:* java.lang.String

---

##### `readableSecondary`<sup>Required</sup> <a name="readableSecondary" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.readableSecondary"></a>

```java
public java.lang.String getReadableSecondary();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `sqlVirtualMachineId`<sup>Required</sup> <a name="sqlVirtualMachineId" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.sqlVirtualMachineId"></a>

```java
public java.lang.String getSqlVirtualMachineId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerReplica">MssqlVirtualMachineAvailabilityGroupListenerReplica</a>

---


### MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference <a name="MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mssql_virtual_machine_availability_group_listener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference;

new MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts">MssqlVirtualMachineAvailabilityGroupListenerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mssqlVirtualMachineAvailabilityGroupListener.MssqlVirtualMachineAvailabilityGroupListenerTimeouts">MssqlVirtualMachineAvailabilityGroupListenerTimeouts</a>

---



