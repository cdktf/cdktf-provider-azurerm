# `azurerm_eventhub_namespace_schema_group`

Refer to the Terraform Registory for docs: [`azurerm_eventhub_namespace_schema_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group).

# `eventhubNamespaceSchemaGroup` Submodule <a name="`eventhubNamespaceSchemaGroup` Submodule" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventhubNamespaceSchemaGroup <a name="EventhubNamespaceSchemaGroup" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group azurerm_eventhub_namespace_schema_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_schema_group.EventhubNamespaceSchemaGroup;

EventhubNamespaceSchemaGroup.Builder.create(Construct scope, java.lang.String id)
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
    .namespaceId(java.lang.String)
    .schemaCompatibility(java.lang.String)
    .schemaType(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(EventhubNamespaceSchemaGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#name EventhubNamespaceSchemaGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#namespace_id EventhubNamespaceSchemaGroup#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.schemaCompatibility">schemaCompatibility</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#schema_compatibility EventhubNamespaceSchemaGroup#schema_compatibility}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.schemaType">schemaType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#schema_type EventhubNamespaceSchemaGroup#schema_type}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#id EventhubNamespaceSchemaGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts">EventhubNamespaceSchemaGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#name EventhubNamespaceSchemaGroup#name}.

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.namespaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#namespace_id EventhubNamespaceSchemaGroup#namespace_id}.

---

##### `schemaCompatibility`<sup>Required</sup> <a name="schemaCompatibility" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.schemaCompatibility"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#schema_compatibility EventhubNamespaceSchemaGroup#schema_compatibility}.

---

##### `schemaType`<sup>Required</sup> <a name="schemaType" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.schemaType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#schema_type EventhubNamespaceSchemaGroup#schema_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#id EventhubNamespaceSchemaGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts">EventhubNamespaceSchemaGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#timeouts EventhubNamespaceSchemaGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.putTimeouts"></a>

```java
public void putTimeouts(EventhubNamespaceSchemaGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts">EventhubNamespaceSchemaGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_schema_group.EventhubNamespaceSchemaGroup;

EventhubNamespaceSchemaGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_schema_group.EventhubNamespaceSchemaGroup;

EventhubNamespaceSchemaGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_schema_group.EventhubNamespaceSchemaGroup;

EventhubNamespaceSchemaGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference">EventhubNamespaceSchemaGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.namespaceIdInput">namespaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.schemaCompatibilityInput">schemaCompatibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.schemaTypeInput">schemaTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts">EventhubNamespaceSchemaGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.schemaCompatibility">schemaCompatibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.schemaType">schemaType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.timeouts"></a>

```java
public EventhubNamespaceSchemaGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference">EventhubNamespaceSchemaGroupTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.namespaceIdInput"></a>

```java
public java.lang.String getNamespaceIdInput();
```

- *Type:* java.lang.String

---

##### `schemaCompatibilityInput`<sup>Optional</sup> <a name="schemaCompatibilityInput" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.schemaCompatibilityInput"></a>

```java
public java.lang.String getSchemaCompatibilityInput();
```

- *Type:* java.lang.String

---

##### `schemaTypeInput`<sup>Optional</sup> <a name="schemaTypeInput" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.schemaTypeInput"></a>

```java
public java.lang.String getSchemaTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts">EventhubNamespaceSchemaGroupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

---

##### `schemaCompatibility`<sup>Required</sup> <a name="schemaCompatibility" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.schemaCompatibility"></a>

```java
public java.lang.String getSchemaCompatibility();
```

- *Type:* java.lang.String

---

##### `schemaType`<sup>Required</sup> <a name="schemaType" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.schemaType"></a>

```java
public java.lang.String getSchemaType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EventhubNamespaceSchemaGroupConfig <a name="EventhubNamespaceSchemaGroupConfig" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_schema_group.EventhubNamespaceSchemaGroupConfig;

EventhubNamespaceSchemaGroupConfig.builder()
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
    .namespaceId(java.lang.String)
    .schemaCompatibility(java.lang.String)
    .schemaType(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(EventhubNamespaceSchemaGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#name EventhubNamespaceSchemaGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#namespace_id EventhubNamespaceSchemaGroup#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.schemaCompatibility">schemaCompatibility</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#schema_compatibility EventhubNamespaceSchemaGroup#schema_compatibility}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.schemaType">schemaType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#schema_type EventhubNamespaceSchemaGroup#schema_type}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#id EventhubNamespaceSchemaGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts">EventhubNamespaceSchemaGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#name EventhubNamespaceSchemaGroup#name}.

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#namespace_id EventhubNamespaceSchemaGroup#namespace_id}.

---

##### `schemaCompatibility`<sup>Required</sup> <a name="schemaCompatibility" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.schemaCompatibility"></a>

```java
public java.lang.String getSchemaCompatibility();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#schema_compatibility EventhubNamespaceSchemaGroup#schema_compatibility}.

---

##### `schemaType`<sup>Required</sup> <a name="schemaType" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.schemaType"></a>

```java
public java.lang.String getSchemaType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#schema_type EventhubNamespaceSchemaGroup#schema_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#id EventhubNamespaceSchemaGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.timeouts"></a>

```java
public EventhubNamespaceSchemaGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts">EventhubNamespaceSchemaGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#timeouts EventhubNamespaceSchemaGroup#timeouts}

---

### EventhubNamespaceSchemaGroupTimeouts <a name="EventhubNamespaceSchemaGroupTimeouts" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_schema_group.EventhubNamespaceSchemaGroupTimeouts;

EventhubNamespaceSchemaGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#create EventhubNamespaceSchemaGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#delete EventhubNamespaceSchemaGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#read EventhubNamespaceSchemaGroup#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#create EventhubNamespaceSchemaGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#delete EventhubNamespaceSchemaGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/eventhub_namespace_schema_group#read EventhubNamespaceSchemaGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventhubNamespaceSchemaGroupTimeoutsOutputReference <a name="EventhubNamespaceSchemaGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.eventhub_namespace_schema_group.EventhubNamespaceSchemaGroupTimeoutsOutputReference;

new EventhubNamespaceSchemaGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts">EventhubNamespaceSchemaGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts">EventhubNamespaceSchemaGroupTimeouts</a>

---



